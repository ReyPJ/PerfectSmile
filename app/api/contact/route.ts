import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, telefono, email, pais, mensaje } = body;

        if (!name || !telefono || !email || !pais || !mensaje) {
            return NextResponse.json(
                { error: "Todos los campos son requeridos" },
                { status: 400 },
            );
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "perfectsmileexperts@gmail.com",
                pass: "awah gdgl axhc ngnh",
            },
        });

        const emailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 20px; }
                .header { background-color: #017f7b; color: #fff; text-align: center; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { padding: 20px; }
                .footer { background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Nueva Data de Perfect Smile Experts</h1>
                </div>
                <div class="content">
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Teléfono:</strong> ${telefono}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>País:</strong> ${pais}</p>
                    <p><strong>Mensaje:</strong> ${mensaje}</p>
                </div>
                <div class="footer">
                    Este mensaje fue enviado desde el formulario de contacto de Perfect Smile Experts.
                </div>
            </div>
        </body>
        </html>
        `;

        const mailOptions = {
            from: "perfectsmileexperts@gmail.com",
            to: "perfectsmileexperts@gmail.com",
            subject: "Nueva Data Contacto",
            html: emailTemplate,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Correo enviado exitosamente" });
    } catch (error) {
        console.error("Error enviando el correo:", error);
        return NextResponse.json(
            { error: "Error enviando correo" },
            { status: 500 },
        );
    }
}
