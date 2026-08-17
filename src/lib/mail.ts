import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export interface SendMailParams {
  email: string;
  company?: string;
}

export const submitAccessRequest = createServerFn({ method: "POST" })
  .validator((data: SendMailParams) => data)
  .handler(async ({ data }) => {
    const { email, company } = data;

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "c6595fa3d6c02e",
        pass: "0f6042da7e8e14",
      },
    });

    const info = await transporter.sendMail({
      from: '"Mail AI Landing" <noreply@mail-ia.com>',
      to: "eduardocubiasm@gmail.com",
      subject: `Nueva solicitud de acceso beta: ${company || "Sin empresa"}`,
      text: `Has recibido una nueva solicitud de acceso a la beta privada de Mail AI.\n\nEmpresa: ${company || "No especificada"}\nCorreo: ${email}\nFecha: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff; color: #1a1a1a;">
          <h2 style="color: #4a6b32; margin-top: 0;">🚀 Nueva solicitud de acceso a Mail AI</h2>
          <p style="font-size: 15px; line-height: 1.6;">Se ha registrado un nuevo lead para la <strong>Beta privada</strong> desde la landing page:</p>
          <div style="background-color: #f7f9f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>🏢 Empresa:</strong> ${company || "<em>No especificada</em>"}</p>
            <p style="margin: 8px 0;"><strong>✉️ Correo electrónico:</strong> <a href="mailto:${email}" style="color: #4a6b32; font-weight: bold;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>📅 Fecha y Hora:</strong> ${new Date().toLocaleString("es-ES")}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888888; text-align: center;">Mail AI - Notificación automática de leads</p>
        </div>
      `,
    });

    console.log("Email enviado con éxito via Mailtrap, messageId:", info.messageId);
    return { success: true, messageId: info.messageId };
  });
