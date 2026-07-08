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

    const safeCompany = company || "Non renseigné";
    const safeDate = date || "Non renseignée";
    const safeTransport = transport || "Non renseigné";

    const ownerEmail = await resend.emails.send({
      from: "Salignat Transport <contact@salignattransport.fr>",
      to: "contact@salignattransport.fr",
      replyTo: email,
      subject: `🚛 Nouvelle demande de devis - ${departure} → ${arrival}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7f5f0; padding:30px;">
          <div style="max-width:700px; margin:auto; background:white; border-radius:20px; overflow:hidden; border:1px solid #eee;">
            <div style="background:#ff5a00; padding:24px; color:white;">
              <h1 style="margin:0; font-size:26px;">Nouvelle demande de devis</h1>
              <p style="margin:8px 0 0;">SALIGNAT TRANSPORT</p>
            </div>

            <div style="padding:28px;">
              <h2 style="margin-top:0;">Informations client</h2>

              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Société :</strong> ${safeCompany}</p>
              <p><strong>Téléphone :</strong> ${phone}</p>
              <p><strong>Email :</strong> ${email}</p>

              <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />

              <h2>Transport demandé</h2>

              <p><strong>Départ :</strong> ${departure}</p>
              <p><strong>Arrivée :</strong> ${arrival}</p>
              <p><strong>Date souhaitée :</strong> ${safeDate}</p>
              <p><strong>Type de transport :</strong> ${safeTransport}</p>

              <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />

              <h2>Détails</h2>
              <p style="white-space:pre-line;">${message}</p>

              <div style="margin-top:28px; padding:18px; background:#f7f5f0; border-radius:14px;">
                <p style="margin:0;"><strong>Action conseillée :</strong> répondre au client sous 24h maximum.</p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    const clientEmail = await resend.emails.send({
      from: "Salignat Transport <contact@salignattransport.fr>",
      to: email,
      subject: "Votre demande de devis a bien été reçue",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f7f5f0; padding:30px;">
          <div style="max-width:680px; margin:auto; background:white; border-radius:20px; overflow:hidden; border:1px solid #eee;">
            <div style="background:#111111; padding:28px; text-align:center;">
              <img src="https://salignattransport.fr/logo.svg" alt="Salignat Transport" style="max-width:180px; height:auto;" />
            </div>

            <div style="padding:32px;">
              <h1 style="margin-top:0; color:#111111;">Votre demande a bien été reçue</h1>

              <p>Bonjour ${name},</p>

              <p>
                Nous vous remercions pour votre demande de devis auprès de
                <strong>SALIGNAT TRANSPORT</strong>.
              </p>

              <p>
                Votre demande a bien été enregistrée. Nous reviendrons vers vous
                dans un délai maximum de <strong>24 heures</strong> afin de vous proposer
                la solution la plus adaptée à votre transport.
              </p>

              <div style="margin:26px 0; padding:20px; background:#f7f5f0; border-left:5px solid #ff5a00; border-radius:12px;">
                <p style="margin:0;"><strong>Votre trajet :</strong></p>
                <p style="margin:8px 0 0;">${departure} → ${arrival}</p>
              </div>

              <p>
                Si votre demande est urgente, vous pouvez également nous contacter directement :
              </p>

              <p>
                <strong>Téléphone :</strong> 06 52 82 71 48<br />
                <strong>Email :</strong> contact@salignattransport.fr
              </p>

              <div style="margin-top:28px;">
                <a href="tel:0652827148" style="display:inline-block; background:#ff5a00; color:white; text-decoration:none; padding:14px 22px; border-radius:999px; font-weight:bold; margin-right:10px;">
                  Appeler
                </a>

                <a href="https://salignattransport.fr" style="display:inline-block; background:#111111; color:white; text-decoration:none; padding:14px 22px; border-radius:999px; font-weight:bold;">
                  Visiter le site
                </a>
              </div>

              <hr style="border:none; border-top:1px solid #eee; margin:32px 0;" />

              <p style="margin-bottom:0;">
                Merci de votre confiance.<br /><br />
                <strong>SALIGNAT TRANSPORT</strong><br />
                Transport régional • national • urgent<br />
                Villefranche-sur-Saône
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (ownerEmail.error || clientEmail.error) {
      console.error(ownerEmail.error || clientEmail.error);

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