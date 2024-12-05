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

        const mailOptions = {
            from: "perfectsmileexperts@gmail.com",
            to: "perfectsmileexperts@gmail.com",
            subject: "Nueva Data Contacto",
            text: `
                Nombre: ${name}
                Telefono: ${telefono}
                Email: ${email}
                Pais: ${pais}
                Mensaje: ${mensaje}
            `,
        };

        await transporter.sendMail(mailOptions);

        console.log("Info recibida:", body);

        return NextResponse.json({ message: "Correo enviado exitosamente" });
    } catch (error) {
        console.error("Error enviando el correo:", error);
        return NextResponse.json(
            { error: "Error enviando correo" },
            { status: 500 },
        );
    }
}
