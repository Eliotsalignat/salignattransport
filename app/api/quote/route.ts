import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      phone,
      email,
      departure,
      arrival,
      date,
      transport,
      message,
    } = body;

    const { error } = await resend.emails.send({
      from: "Salignat Transport <contact@salignattransport.fr>",
      to: "contact@salignattransport.fr",
      replyTo: email,
      subject: `Nouvelle demande de devis - ${name}`,
      html: `
        <h2>Nouvelle demande de devis</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Société :</strong> ${company}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Départ :</strong> ${departure}</p>
        <p><strong>Arrivée :</strong> ${arrival}</p>
        <p><strong>Date souhaitée :</strong> ${date}</p>
        <p><strong>Transport :</strong> ${transport}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}