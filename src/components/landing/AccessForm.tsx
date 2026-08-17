import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { submitAccessRequest } from "@/lib/mail";

export function AccessForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Escribe un correo válido, por ejemplo nombre@gmail.com");
      return;
    }
    setSending(true);
    try {
      await submitAccessRequest({ data: { email, company } });
      setSent(true);
      toast.success("¡Solicitud enviada! Correo despachado exitosamente.");
    } catch (err: any) {
      console.error("Error al enviar solicitud:", err);
      toast.error(
        err?.message || "Error al enviar la solicitud. Revisa la consola o intenta de nuevo.",
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="surface-3d rounded-3xl p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-2xl font-semibold">¡Solicitud recibida!</h3>
        <p className="mt-2 text-muted-foreground">
          Enviaremos las credenciales de la beta privada a{" "}
          <span className="text-primary">{email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-3d rounded-3xl p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-muted-foreground">Empresa</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Nombre de tu empresa"
            className="mt-2 w-full rounded-2xl border border-border bg-input/60 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-sm font-medium text-muted-foreground">
            Correo Gmail corporativo
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tuempresa@gmail.com"
            required
            className="mt-2 w-full rounded-2xl border border-border bg-input/60 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="glow-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:brightness-105 active:translate-y-px disabled:opacity-70"
      >
        {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {sending ? "Enviando..." : "Enviar solicitud"}
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Usamos tu Gmail únicamente para enviarte el acceso a la beta privada.
      </p>
    </form>
  );
}