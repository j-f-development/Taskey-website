/* ============================================================================
 * News translations (EN + FR)
 * ----------------------------------------------------------------------------
 * Keyed by post slug. If a field is missing, the slug page falls back to the
 * German version from posts.ts. Bodies for long marketing articles fall back
 * to the German body with a translation banner shown above it; bodies for
 * short release/update notes are translated fully.
 * ========================================================================== */

import type { PostTranslation } from "./posts";

type Locale = "en" | "fr";

const T: Record<string, Partial<Record<Locale, PostTranslation>>> = {
  "taskey-share-website": {
    en: {
      title: "Taskey Share now has its own website: taskey-share.de",
      summary:
        "Taskey Share, the client portal from Taskey, now has its own dedicated website at taskey-share.de with an interactive floor plan demo, six industry pages and a clear explanation of the proof-of-service model. The demo is openly accessible; the production portal itself uses a dedicated login per client.",
      metaTitle: "Taskey Share website · taskey-share.de · Live demo for clients",
      metaDescription:
        "Taskey Share, the client portal by Taskey, is now available on its own dedicated website at taskey-share.de with an interactive floor plan demo, industry pages and proof-of-service explanations. The demo is openly accessible; the production portal itself uses a dedicated login per client.",
      body: `Taskey Share has been part of every Taskey plan for several months now. The client portal, where your customers see live what is happening at their sites, has proven itself in practice. What was missing: a dedicated place on the web where you could look at the whole thing in peace, without having to click through the Taskey pricing structure first.

As of today that exists: **[taskey-share.de](https://taskey-share.de/en)**.

## What's on the site

**Interactive floor plan demo.** A sample office building with five floors. Rooms are clickable, status is colour-coded (green done, orange in progress, red open task, white pending). Tooltip per room, task history, live presence on site. Exactly what your client will see later — just with fictional data.

**Six industries in detail.** Real Estate & Asset Management, Rail & Public Transport, Aviation, Hospital & Care, Food & Commercial Kitchens, and Public Sector each have their own page. Same structure everywhere: the problem, three arguments, the concrete views, the functions, the proof, the typical questions. Six more industries (retail, hospitality, outdoor & winter service, industry, events, security) are announced.

**Proof page.** How the live link becomes robust evidence: six building blocks, four use cases, a legal note. For everyone who has to prove what their service providers delivered on their sites.

**Contact in four ways.** Call, email with a pre-filled template, calendar booking or straight into the live demo. No form, no queue.

## Why a dedicated website

The request came from our own customers. Anyone who, as a cleaning company or facility service provider, sets up the portal for their clients wants a place where they don't have to do the explaining themselves. "Have a quick look at this" instead of "let me explain this" — that shortcut was exactly the brief for the new site.

On the other side, clients from real estate, public transit, aviation and healthcare are rarely the audience of the main Taskey site. That one speaks to operators: people who run cleaning, winter service or technical services as a business. The recipients of the proof needed a site of their own, in their language and with their examples.

## What this means for existing customers

Nothing you need to do. Taskey Share keeps running as before from your Taskey account, at [share.taskeyapp.com](https://share.taskeyapp.com). The new site is a pure marketing website and doesn't change anything about the product itself.

If you want to introduce the portal to your clients, from now on you can simply share the link **[taskey-share.de](https://taskey-share.de/en)**. The interactive demo there explains in a few clicks what the portal will look like for them later.

## What's next

The six "in preparation" industry pages will be released one by one, each as soon as the industry-specific briefing is final. And we are expanding the demo step by step, so that even more of your clients' day-to-day workflow ends up in it.

Worth a look: **[taskey-share.de](https://taskey-share.de/en)**.`,
    },
    fr: {
      title: "Taskey Share a désormais son propre site : taskey-share.de",
      summary:
        "Taskey Share, le portail donneur d'ordre de Taskey, a maintenant son propre site à taskey-share.de — avec une démo interactive de plan d'étage, six pages sectorielles et une explication claire de la preuve de service. Sans connexion, sans application.",
      metaTitle: "Site Taskey Share · taskey-share.de · Démo en direct pour donneurs d'ordre",
      metaDescription:
        "Taskey Share, le portail donneur d'ordre de Taskey, est désormais disponible sur son propre site à taskey-share.de — démo interactive de plan, pages sectorielles et explication de la preuve de service. Sans connexion, sans application.",
      body: `Taskey Share fait partie de chaque forfait Taskey depuis plusieurs mois. Le portail donneur d'ordre, dans lequel vos client·e·s voient en direct ce qui se passe sur leurs sites, a fait ses preuves. Ce qui manquait : un lieu dédié sur le web où l'on peut regarder tout cela tranquillement, sans devoir d'abord parcourir la grille tarifaire de Taskey.

Depuis aujourd'hui c'est le cas : **[taskey-share.de](https://taskey-share.de/fr)**.

## Ce que l'on trouve sur le site

**Démo interactive de plan d'étage.** Un immeuble de bureaux exemple avec cinq étages. Pièces cliquables, statut codé par couleur (vert terminé, orange en cours, rouge tâche ouverte, blanc à faire). Info-bulle par pièce, historique des tâches, présence en direct sur site. Exactement ce que votre donneur d'ordre verra ensuite — avec des données fictives.

**Six secteurs en détail.** Immobilier & Asset Management, Ferroviaire & Transports publics, Aviation, Hôpital & Soins, Alimentation & Cuisines collectives, Secteur public : chacun a sa page. Même structure partout : le problème, trois arguments, les vues concrètes, les fonctions, la preuve, les questions typiques. Six autres secteurs (commerce, hôtellerie, espaces extérieurs, industrie, événementiel, sécurité) sont annoncés.

**Page preuve.** Comment le lien en direct devient une preuve solide : six éléments, quatre cas d'usage, une mention légale. Pour toutes celles et ceux qui doivent démontrer ce que leurs prestataires ont livré sur leurs sites.

**Contact en quatre voies.** Appel, e-mail avec texte pré-rempli, prise de rendez-vous ou accès direct à la démo. Pas de formulaire, pas de file d'attente.

## Pourquoi un site dédié

La demande vient de nos client·e·s eux-mêmes. Quiconque, en tant qu'entreprise de nettoyage ou de facility, met en place le portail pour ses donneur·euses d'ordre veut un endroit où il n'a pas à faire l'explication lui-même. « Regardez rapidement ça » à la place de « laissez-moi vous expliquer » — c'est exactement le raccourci qui a servi de brief pour le nouveau site.

De l'autre côté, les donneur·euses d'ordre de l'immobilier, des transports publics, de l'aviation ou de la santé sont rarement l'audience du site principal de Taskey. Celui-ci s'adresse aux opérateur·rice·s : celles et ceux qui pilotent le nettoyage, le déneigement ou les services techniques en tant qu'entreprise. Il fallait donc un site à part pour les destinataires de la preuve, dans leur langue et avec leurs exemples.

## Ce que cela change pour les client·e·s existant·e·s

Rien à faire de votre côté. Taskey Share continue de fonctionner comme avant depuis votre compte Taskey, à [share.taskeyapp.com](https://share.taskeyapp.com). Le nouveau site est une pure vitrine et ne change rien au produit lui-même.

Si vous souhaitez présenter le portail à vos donneur·euses d'ordre, vous pouvez désormais simplement partager le lien **[taskey-share.de](https://taskey-share.de/fr)**. La démo interactive qui s'y trouve leur explique en quelques clics à quoi le portail ressemblera pour eux ensuite.

## La suite

Les six pages sectorielles « en préparation » seront publiées les unes après les autres, dès que le brief propre à chaque secteur sera finalisé. Et nous enrichissons la démo pas à pas pour qu'elle reflète encore davantage le quotidien de vos donneur·euses d'ordre.

Un coup d'œil vaut la peine : **[taskey-share.de](https://taskey-share.de/fr)**.`,
    },
  },
  "taskey-share-live": {
    en: {
      title: "Taskey Share is live: the client portal is here",
      summary:
        "We talked about it for a while – now it's here. Taskey Share, the portal where your clients see for themselves what's happening on site, goes live today and ships in every plan. Here's what it does, what it fixes and how to switch it on.",
      metaTitle: "Taskey Share is live | Client portal now in every plan",
      metaDescription:
        "Taskey Share is finally out. The lean client portal shows your customers live status, proof of service, budgets and messages straight from the browser — no phone calls, no email. Included in every Taskey plan from day one.",
      body: `Today is the day. Taskey Share is live.

We built Taskey Share over several months with pilot customers from commercial cleaning and technical services — tested, scrapped, rebuilt. Starting today, it's available to every Taskey customer. No upcharge, in every plan, no setup work.

## What Taskey Share is

Taskey Share is the portal where your clients can see, at any time, what's happening on their site. Live status of running jobs, uploaded proof of service, open budgets, messages — everything in a lean browser view, with a personal login per client, no app install, no training.

It's not a new system your clients have to learn. It's not an extra tool you have to manage. It's simply there the moment you create a job in Taskey.

## Why we built this

In almost every conversation with our customers, the same point came up: "Honestly — we spend half the day giving clients information they could already see themselves."

Has the crew started today? How far along is the site? Where are the photos from the last visit? How much budget is left this month? When is the invoice coming?

These questions aren't rude. They're completely legitimate — after all, the client is paying for a service. The problem is that each one of them costs office time, distracts the field team, and erodes client trust when the answer takes too long.

Taskey Share closes that gap at exactly the point where the information already exists.

## What your clients now see

**Live status.** Your client sees in real time what is happening on site. Which job is running, which is finished, what's planned next. The information comes straight from your team's NFC check-ins and status updates — no one has to be called.

**Proof of service.** Photos from the job, cleaning reports, defect reports, handovers — automatically tied to the right job and visible to the client. No more email attachments, no more PDF bundles at month end.

**Budget.** On running contracts, the client sees how much of the monthly budget has been delivered, what's still open, and whether anything ran outside the flat rate. Full transparency — the most common reason for end-of-month queries simply disappears.

**Communication.** Quick questions are settled directly in the portal — tied to the right job, not buried in an email thread that gets lost. Your phone stays quiet.

## What changes for you as an operation

Three concrete things.

First: the office gets fewer calls. "When are you coming?" / "Have you done it yet?" / "Where are Friday's photos?" — these classes of question disappear the moment the client can see for themselves.

Second: complaints become rarer and shorter. When the client can pull up the proof of service themselves, uncertainty never escalates into a complaint. And if a discussion does happen, the evidence is on the table, transparent for both sides.

Third: sales gets a new argument. "You see live, at any time, what's happening on your site" is a real differentiator against traditional cleaning companies — it carries weight in tenders, especially with property managers and multi-site clients who already work in reporting mode.

## What Taskey Share deliberately is not

Taskey Share is not a second backend for your client. It shows your work transparently and opens clearly defined interaction paths: the client can review proof of service, pull up shared invoice information, open tickets, flag complaints and requests, and request special jobs. You stay in full control of what's visible and which actions are enabled — per client, per site, per job.

We deliberately decided against a full "self-service portal" where the client autonomously approves jobs. The client can submit requests and concerns in a structured way, while approval and prioritisation stay with your business. That keeps the service relationship intact and makes every interaction traceable.

## How to switch it on

Taskey Share is included from today in every Taskey plan. No module to add. No extra contract. No setup appointment.

You activate the portal per client directly in Taskey: one click in the customer record, the client gets their credentials by email, signs in from the browser and is in. No app install, no extra software.

You control what's visible per client. Whatever shouldn't be visible isn't.

## A word to our pilot customers

Without our pilot customers — first and foremost MG Gebäudeservice in Düsseldorf — Taskey Share would have become a different product. Probably a bigger, more complicated one that tried to solve everything. Instead it became what proved itself in real use: narrow, clear, explainable without training, and focused on the one point where the office and clients lose most time today.

Thanks for testing it with us, for the honest feedback, and for the many calls of the "you have to change this or no one will use it" variety.

## Getting started

If you already use Taskey: Taskey Share is in your account from today. Activate it in the customer record the next time you're about to give a client an update — and send them the link instead.

If you don't use Taskey yet: you can try Taskey including Share free for 30 days. Set it up, log a job, send the portal link to an existing client. We're curious to hear what they think.`,
      date: "June 2, 2026",
    },
    fr: {
      title: "Taskey Share est en ligne : le portail client est là",
      summary:
        "Annoncé depuis longtemps — il est enfin là. Taskey Share, le portail dans lequel vos clients voient ce qui se passe chez eux, est disponible aujourd'hui dans tous les plans. Ce qu'il fait, ce qu'il règle et comment l'activer.",
      metaTitle: "Taskey Share en ligne | Portail client inclus dans tous les plans",
      metaDescription:
        "Taskey Share est enfin disponible. Le portail léger montre à vos clients le statut en direct, les preuves de service, les budgets et les échanges directement dans le navigateur — sans appels, sans e-mails. Inclus dans chaque plan Taskey.",
      body: `C'est le grand jour. Taskey Share est en ligne.

Nous avons construit Taskey Share pendant plusieurs mois avec des clients pilotes du nettoyage professionnel et du service technique — testé, jeté, reconstruit. À partir d'aujourd'hui, il est disponible pour chaque client Taskey. Sans surcoût, dans chaque plan, sans effort de mise en place.

## Ce qu'est Taskey Share

Taskey Share est le portail dans lequel vos donneurs d'ordre voient à tout moment ce qui se passe chez eux. Statut en direct des interventions en cours, preuves de service téléchargées, budgets ouverts, messages — le tout dans une interface navigateur épurée. Pas de barrière de connexion, pas d'installation d'application, pas de formation.

Ce n'est pas un nouveau système que vos clients doivent apprendre. Ce n'est pas un outil supplémentaire à administrer. Il est simplement là dès que vous créez une mission dans Taskey.

## Pourquoi nous l'avons construit

Dans presque chaque échange avec nos clients, le même point revenait : « Franchement — on passe la moitié de la journée à donner aux donneurs d'ordre des informations qu'ils pourraient voir eux-mêmes. »

L'équipe a-t-elle commencé aujourd'hui ? Où en est le site ? Où sont les photos de la dernière intervention ? Combien de budget reste-t-il ce mois-ci ? Quand arrive la facture ?

Ces questions ne sont pas déplacées. Elles sont parfaitement légitimes — le client paie pour une prestation. Le problème : chacune coûte du temps au bureau, déconcentre l'équipe terrain et entame la confiance du client quand la réponse tarde.

Taskey Share comble cet écart exactement à l'endroit où l'information existe déjà.

## Ce que vos donneurs d'ordre voient maintenant

**Statut en direct.** Votre client voit en temps réel ce qui se passe sur le site. Quelle intervention est en cours, laquelle est terminée, ce qui est planifié ensuite. L'information vient directement des check-ins NFC et des remontées de statut de votre équipe — il n'a personne à appeler.

**Preuves de service.** Photos d'intervention, comptes rendus de nettoyage, signalements de défauts, remises — tout est automatiquement rattaché à la bonne mission et consultable par le client. Plus de pièces jointes par mail, plus de PDF en lots en fin de mois.

**Budget.** Sur les contrats récurrents, le client voit la part du budget mensuel déjà consommée, ce qui reste ouvert, et si quelque chose est sorti du forfait. Transparence totale — la cause la plus fréquente de questions en fin de mois disparaît.

**Communication.** Les questions rapides sont réglées directement dans le portail — rattachées à la bonne mission, pas perdues dans une chaîne d'e-mails. Votre téléphone reste calme.

## Ce qui change pour votre entreprise

Trois choses concrètes.

Premièrement : le bureau reçoit moins d'appels. « Vous venez quand ? » / « C'est fait ? » / « Où sont les photos de vendredi ? » — ces familles de questions s'effacent dès que le client peut voir lui-même.

Deuxièmement : les réclamations deviennent plus rares et plus courtes. Quand le donneur d'ordre peut consulter lui-même les preuves, l'incertitude ne devient pas une réclamation. Et si une discussion arrive, la preuve est posée sur la table, transparente pour les deux parties.

Troisièmement : le commercial a un nouvel argument. « Vous voyez en direct, à tout moment, ce qui se passe chez vous » est un vrai différenciateur face aux entreprises de nettoyage classiques — un poids réel dans les appels d'offres, notamment auprès des property managers et des clients multi-sites qui fonctionnent déjà en mode reporting.

## Ce que Taskey Share n'est volontairement pas

Taskey Share n'est pas un second backend pour votre client. Le portail montre votre prestation de manière transparente et ouvre des voies d'interaction clairement définies : le donneur d'ordre peut consulter les justificatifs, accéder aux informations de facturation partagées, ouvrir des tickets, signaler des réclamations et des demandes, et solliciter des prestations spéciales. Vous gardez le contrôle complet de ce qui est visible et des actions autorisées — par donneur d'ordre, par site, par mission.

Nous avons délibérément renoncé à un « portail self-service » complet dans lequel le client valide seul les missions. Le client peut transmettre demandes et signalements de manière structurée ; la validation et la priorisation restent chez votre entreprise. Cela préserve la relation de prestation tout en rendant chaque interaction traçable.

## Comment l'activer

Taskey Share est inclus dès aujourd'hui dans chaque formule Taskey. Aucun module à ajouter. Aucun contrat supplémentaire. Aucun rendez-vous de mise en place.

Vous activez le portail par donneur d'ordre directement dans Taskey : un clic dans la fiche client, le donneur d'ordre reçoit ses identifiants par e-mail, se connecte depuis le navigateur et y accède. Pas d'installation d'application, pas de logiciel supplémentaire.

Ce qui est visible, vous le pilotez par donneur d'ordre. Ce qui ne doit pas être visible ne l'est pas.

## Un mot à nos clients pilotes

Sans nos clients pilotes — au premier rang desquels MG Gebäudeservice à Düsseldorf — Taskey Share aurait été un autre produit. Probablement plus grand, plus compliqué, à essayer de tout résoudre. Au lieu de cela, il est devenu ce qui a fait ses preuves en conditions réelles : étroit, clair, explicable sans formation, et concentré sur le seul point où le bureau et les donneurs d'ordre perdent aujourd'hui le plus de temps.

Merci d'avoir testé avec nous, pour les retours honnêtes et pour les nombreux appels du type « il faut encore changer ça, sinon personne ne l'utilisera. »

## Pour démarrer

Si vous utilisez déjà Taskey : Taskey Share est dans votre compte dès aujourd'hui. Activez-le dans la fiche du prochain donneur d'ordre à qui vous alliez justement donner des nouvelles — et envoyez-lui le lien à la place.

Si vous n'utilisez pas encore Taskey : vous pouvez essayer Taskey, Share inclus, gratuitement pendant 30 jours. Configurez-le, créez une mission, envoyez le lien du portail à un client existant. Curieux de savoir ce qu'il en dira.`,
      date: "2 juin 2026",
    },
  },

  "kommunikation-einsatzort-buero-erfolgsfaktor": {
    en: {
      title: "Communication between field and office: the underrated success factor",
      summary:
        "Why most cleaning businesses still lose hours every day on the simple back-and-forth between site and office — and how a single live channel changes the economics.",
      metaTitle: "Field-to-office communication: the underrated success factor | Taskey",
      metaDescription:
        "Most cleaning businesses still lose hours daily on phone calls between site and office. Here's how a single live channel removes the friction and changes margins.",
      body: `In almost every mid-sized cleaning or services operation we've spoken to over the past years, the same sentence came up sooner or later:

"Honestly — our biggest problem isn't that we don't have enough work. Our biggest problem is that we don't really know what's happening out there."

That sounds trivial. It isn't. Behind that sentence sits the biggest, worst-measured and most rarely addressed cost block in many operational businesses: the information gap between the field and the office.

It's the reason quotes are calculated too tight. The reason complaints escalate even though the work was done. The reason technicians and cleaning staff are exhausted in the evenings — not from the work, but from the paperwork around it. The reason good employees quit even though the pay and the team are fine. And the reason owners sort scraps of paper at the kitchen table on Sundays instead of running their business.

This article takes the topic seriously. No buzzwords, no silver bullets. We'll show what "communication between field and office" really covers, which concrete business levers sit behind it, the structural mistakes almost every operator makes — and what a functioning communication model looks like.

## What "field-to-office communication" really covers

When owners talk about "communication", they often mean messenger groups, hallway chats and the morning briefing. That's part of it — the smallest part.

In reality, communication between field and office covers at least seven information flows that must work in both directions:

1. Job information (office → field): what needs doing, where, with which materials, to which spec, by when?
2. Attendance and times (field → office): who was where, when — provable, with no room for interpretation?
3. Status updates (field → office): in progress, finished, delayed, blocked — and why?
4. Operational proof (field → office → client): before/after photos, signatures, defect reports, quality checks.
5. Material movements (field ↔ office ↔ purchasing): what was used, consumed, missing, needs reordering?
6. Client communication (office ↔ client ↔ field): rescheduling, additional services, complaints, approvals.
7. Deviation reporting (field → office → costing): extra hours, changed site conditions, new requirements.

Every one of these seven flows generates cost when it doesn't run cleanly. Usually invisibly. Often more than once.

## The business levers — concrete, not abstract

We deliberately avoid generic claims like "saves up to X hours." Those numbers depend too much on the individual operation to be honestly generalised. Instead, here are the levers that show up in every business — with a realistic read on where the economic effect lives.

**The costing lever.** If you don't know how long a job actually took, you can't quote the next one cleanly. In many operations, post-job costing runs on gut feel, incomplete timesheets and retrospective guesses. The result: jobs that look profitable are actually eating margin. Others, the ones being avoided, would be gold. As soon as actual hours per job, per site and per employee are reliably available, the operation's bidding logic fundamentally shifts within months.

**The complaint lever.** Complaints in operational businesses are rarely a quality problem. They're almost always a proof problem. The client claims something wasn't done. The business knows it was — but can't show it. What follows: arguments, goodwill credits, rework at your own cost, in the worst case a lost contract. None of those costs come from poor work, all of them from poor documentation.

**The payroll lever.** In many operations, payroll or the back office spends several days a month collecting timesheets, decoding them, calling people back, and trying to make them plausible. That isn't productive work. It's pure administrative cost, created by bad communication.

**The leadership lever.** Owners who spend their day on the phone because that's the only way they know what's happening out there aren't leading — they're reacting. A functioning information flow shifts the owner's role from operational hub to strategic decision-maker. This lever is underrated, but in the long run it's the most important one.

**The employee lever.** This is the most overlooked point. Good technicians, site managers and cleaning staff want to work — not document. When documentation becomes a burden that has to happen at the kitchen table in the evening, businesses lose exactly the people they most need to keep. Communication that lives inside the workflow instead of on top of it is one of the most underrated factors for staff retention in operational businesses.

## Why most attempts fail

We see the same four patterns over and over — independent of industry or company size.

**Pattern 1: "We handle it in a chat."** messenger isn't a communication system. It's a message channel. The difference: messages disappear into the chronological feed. Information isn't automatically attached to context (job, site, client). Anyone trying in August to find what was discussed about site XY in February has a problem. On top of that: questionable from a data-protection angle, not audit-proof for labour law, and the entire history is lost when someone leaves.

**Pattern 2: "We have software, but nobody uses it."** The most common scenario. The reason is almost never "the staff don't want to". The reason is that the software adds work instead of replacing it. If a cleaner needs ten extra minutes on their phone after a shift to log what they already did, they won't keep doing it. And they're right. The only solution that demonstrably works: capture has to happen inside the workflow, not next to it. A motion that's already happening — arriving, starting, finishing — must double as the documentation.

**Pattern 3: "We have everything — but nothing connects."** One tool for time, one for jobs, one for photos, one for invoices. Data sits in silos. Post-job costing means Excel exports and manual joins. That's worse than no digitalisation, because it creates a false sense of control.

**Pattern 4: "We'll roll this out when things calm down."** Things don't calm down. That's the uncomfortable truth. Operations that wait for "later" keep paying for the problem every month — quietly, in the background, through lost margin and resigning employees.

## What a working communication model looks like

The model below holds up in practice. It's deliberately simple, because complexity is the enemy of execution.

**Principle 1: one place per information.** Every piece of information lives in one place, clearly attached to its context (job, site, employee). Not in emails, not in chats, not on paper.

**Principle 2: capture where it happens.** Information is captured where it's created — on site, not in the office in the evening. That reduces both effort and errors: memory is the worst data source.

**Principle 3: physical anchor points.** An underrated lever: physical anchor points on site. In commercial cleaning and technical services, NFC tags have proven themselves as a workable solution — a tag at the entrance, a quick scan, and both attendance and job context are unambiguously logged. This kind of capture has a decisive advantage over GPS or geofencing: it's deliberate, not passive. The employee actively does something — and that creates both legal clarity and acceptance in the team.

**Principle 4: asynchronous decision-making.** The office must be able to make decisions without calling the field. That means: live status, available photos, viewable defect reports. Calling an employee shifts from the default path to the exception.

**Principle 5: structure of proof, not volume of proof.** It isn't about documenting as much as possible. It's about documenting the right things in an audit-proof way: attendance, service delivery, handovers, defects, client approvals. The rest is ballast.

**Principle 6: end-to-end through to billing.** The information captured on site must reach invoicing, payroll and accounting with no manual rework. Every media break in between is an error source and a cost centre.

## The role of technology — and its limits

Technology doesn't solve this problem. Technology enables the solution, provided the operation is willing to clarify its processes. In practice that means three things.

First: introducing a system is 30 % software project and 70 % organisational project. Anyone reversing the ratio fails.

Second: the chosen system has to match the reality on site, not a product manager's fantasy. That means: offline-capable, fast, operable with work gloves on, understandable without training.

Third: audit-proofing, GDPR compliance and German operating realities (works councils, collective bargaining, audit-readiness for social security) are not nice-to-haves. They are deal-breakers.

## An honest closing word

Communication between field and office will be a competitive factor in operational industries over the next years. Not because it's suddenly more important — it always was. But because operations that solve it perform measurably better across virtually every business KPI than those that don't:

Higher contribution margins through reliable costing. Lower complaint overhead through complete proof of service. Noticeably reduced admin load in the office. Better staff retention through less "paperwork after hours". Manageability even with growth, without the owner drowning in operations.

Anyone who still believes this topic can be fixed with more discipline, better messenger groups or a second back-office hire is building a competitive disadvantage over the next three to five years that they'll struggle to close later.

The good news: the technical and organisational conditions to solve the problem structurally exist today, are affordable and battle-tested. What's missing in most cases isn't the solution — it's the decision.

If this article struck a nerve: talk to your team. Not about tools. About the seven information flows from the first section — and about which one of them is running worst in your operation today. The answer to that is almost always the right starting point.`,
      date: "May 18, 2026",
    },
    fr: {
      title: "Communication terrain ↔ bureau : le facteur de réussite sous-estimé",
      summary:
        "Pourquoi la plupart des entreprises de nettoyage perdent encore des heures chaque jour dans les allers-retours entre site et bureau — et comment un canal unique en direct change l'économie.",
      metaTitle: "Communication terrain-bureau : le facteur de réussite sous-estimé | Taskey",
      metaDescription:
        "La plupart des entreprises de nettoyage perdent encore des heures par jour en appels entre site et bureau. Voici comment un canal unique en direct supprime les frictions et change les marges.",
      body: `Dans presque chaque entreprise de nettoyage ou de services de taille moyenne avec laquelle nous avons échangé ces dernières années, la même phrase revenait tôt ou tard :

« Honnêtement — notre plus gros problème, ce n'est pas le manque de missions. C'est qu'on ne sait pas vraiment ce qui se passe dehors. »

Cela paraît banal. Ça ne l'est pas. Derrière cette phrase se cache le poste de coût le plus important, le plus mal mesuré et le plus rarement traité dans beaucoup d'entreprises opérationnelles : l'écart d'information entre le terrain et le bureau.

C'est la raison pour laquelle les devis sont chiffrés trop juste. Pour laquelle les réclamations dégénèrent même quand la prestation a été faite. Pour laquelle techniciens et agents d'entretien rentrent épuisés le soir — pas par le travail, mais par la paperasse autour. Pour laquelle de bons collaborateurs démissionnent alors que la rémunération et l'équipe tiennent la route. Et pour laquelle les dirigeants trient des papiers à la table de la cuisine le dimanche au lieu de piloter leur entreprise.

Cet article prend le sujet au sérieux. Pas de buzzwords, pas de promesses miracles. Nous montrons ce que recouvre vraiment la « communication terrain-bureau », quels leviers économiques concrets y sont attachés, quelles erreurs structurelles commettent presque toutes les entreprises — et à quoi ressemble un modèle de communication qui fonctionne.

## Ce que recouvre vraiment la « communication terrain-bureau »

Quand les dirigeants parlent de « communication », ils pensent souvent aux groupes de messagerie, aux échanges à la volée et au briefing du matin. C'en est une partie — la plus petite.

En réalité, la communication entre terrain et bureau couvre au moins sept flux d'information, qui doivent fonctionner dans les deux sens :

1. Information mission (bureau → terrain) : quoi faire, où, avec quel matériel, selon quel cahier des charges, pour quand ?
2. Présence et heures (terrain → bureau) : qui est où, quand — prouvable, sans marge d'interprétation ?
3. Retour de statut (terrain → bureau) : en cours, terminé, retardé, bloqué — et pourquoi ?
4. Preuves opérationnelles (terrain → bureau → client) : photos avant/après, signatures, signalements de défauts, contrôles qualité.
5. Mouvements de matériel (terrain ↔ bureau ↔ achats) : ce qui a été utilisé, consommé, manque, doit être recommandé ?
6. Communication client (bureau ↔ client ↔ terrain) : reports de rendez-vous, prestations supplémentaires, réclamations, validations.
7. Communication d'écart (terrain → bureau → calcul) : surcoûts, conditions modifiées sur place, nouvelles exigences.

Chacun de ces sept flux génère un coût quand il ne fonctionne pas proprement. Le plus souvent invisible. Souvent plusieurs fois.

## Les leviers économiques — concrets, pas abstraits

Nous évitons délibérément les formules génériques du type « économise jusqu'à X heures ». Ces chiffres dépendent trop de chaque entreprise pour être sérieusement généralisés. À la place, voici les leviers qu'on retrouve dans chaque structure — avec une lecture réaliste de l'endroit où se crée l'effet économique.

**Le levier du chiffrage.** Sans savoir combien de temps une mission a réellement pris, impossible de chiffrer la suivante proprement. Dans beaucoup d'entreprises, la post-évaluation repose sur l'intuition, des fiches d'heures incomplètes et des estimations rétroactives. Résultat : des missions en apparence rentables grignotent la marge. D'autres, qu'on évite, seraient en or. Dès que les heures réelles par mission, par site et par collaborateur sont fiables, la logique commerciale de l'entreprise change en profondeur en quelques mois.

**Le levier de la réclamation.** Dans les entreprises opérationnelles, les réclamations sont rarement un problème de qualité. C'est presque toujours un problème de preuve. Le client affirme que quelque chose n'a pas été fait. L'entreprise sait que si — mais ne peut pas le démontrer. S'ensuivent : discussions, gestes commerciaux, reprises à ses frais, au pire perte de contrat. Aucun de ces coûts ne vient d'un travail mal fait, tous viennent d'une documentation insuffisante.

**Le levier de la paie.** Dans beaucoup d'entreprises, le service paie ou le secrétariat passe plusieurs jours par mois à collecter les fiches d'heures, les déchiffrer, rappeler les gens et plausibiliser les données. Ce n'est pas du travail productif. C'est une charge administrative pure, créée par une mauvaise communication.

**Le levier du pilotage.** Les dirigeants qui passent leurs journées au téléphone parce que c'est leur seule façon de savoir ce qui se passe dehors ne dirigent pas — ils réagissent. Un flux d'information qui marche déplace le rôle de la direction d'un point central opérationnel vers une posture de décideur stratégique. Ce levier est sous-estimé, mais sur le long terme c'est le plus important.

**Le levier collaborateur.** C'est le point le plus négligé. Les bons techniciens, chefs de site et agents d'entretien veulent travailler — pas documenter. Quand la documentation devient une charge qu'il faut traiter à la table de la cuisine le soir, l'entreprise perd précisément les personnes qu'elle doit le plus retenir. Une communication qui se déroule dans le flux de travail — pas en plus — est l'un des facteurs les plus sous-estimés de fidélisation dans les entreprises opérationnelles.

## Pourquoi la plupart des tentatives échouent

On retrouve les quatre mêmes schémas en boucle — quel que soit le secteur ou la taille.

**Schéma 1 : « On gère dans un chat. »** messenger n'est pas un système de communication. C'est un canal de messages. La différence : les messages disparaissent dans le fil chronologique. L'information n'est pas rattachée automatiquement au contexte (mission, site, client). Quiconque essaie en août de retrouver ce qui s'est dit en février sur le chantier XY a un problème. En plus : sensible sur le plan de la protection des données, non opposable côté droit du travail, et tout l'historique se perd au départ d'un collaborateur.

**Schéma 2 : « On a un logiciel, mais personne ne l'utilise. »** Le scénario le plus fréquent. La raison n'est presque jamais « les équipes ne veulent pas ». La raison, c'est que le logiciel crée du travail au lieu de remplacer du travail. Si un agent d'entretien doit passer dix minutes de plus sur son téléphone après son service pour saisir ce qu'il a déjà fait, il ne le fera pas durablement. Et il a raison. La seule solution qui marche : la saisie doit se faire dans le flux de travail, pas à côté. Un geste qui a lieu de toute façon — arriver, démarrer, clôturer — doit aussi être la documentation.

**Schéma 3 : « On a tout — mais rien ne se parle. »** Un outil pour les heures, un pour les missions, un pour les photos, un pour la facturation. Les données restent en silos. La post-évaluation, c'est exporter Excel et tout réagréger à la main. C'est pire qu'aucune digitalisation, parce que cela crée un faux sentiment de contrôle.

**Schéma 4 : « On le lancera quand ce sera plus calme. »** Ce ne sera pas plus calme. C'est la vérité désagréable. Les entreprises qui attendent « plus tard » continuent de payer le problème chaque mois — en silence, en arrière-plan, par la marge perdue et les démissions.

## À quoi ressemble un modèle de communication qui fonctionne

Le modèle ci-dessous tient en conditions réelles. Il est volontairement simple, parce que la complexité est l'ennemie de l'exécution.

**Principe 1 : un endroit par information.** Chaque information existe à un seul endroit, rattaché sans ambiguïté à son contexte (mission, site, collaborateur). Pas dans les e-mails, pas dans les chats, pas sur des feuilles.

**Principe 2 : saisie là où elle naît.** Les informations sont saisies là où elles naissent — sur le site, pas au bureau le soir. Cela réduit l'effort et les erreurs : la mémoire est la pire source de données.

**Principe 3 : points d'ancrage physiques.** Un levier sous-estimé : des points d'ancrage physiques sur le site. Dans le nettoyage professionnel et le service technique, les tags NFC se sont imposés comme une solution pragmatique — un tag à l'entrée du site, un scan rapide, et la présence comme le contexte mission sont enregistrés sans ambiguïté. Ce type de saisie a un avantage décisif sur le GPS ou le geofencing : il est volontaire, pas passif. Le collaborateur fait activement quelque chose — cela apporte à la fois la clarté juridique et l'acceptation dans l'équipe.

**Principe 4 : capacité de décision asynchrone.** Le bureau doit pouvoir décider sans appeler le terrain. Cela suppose : statut en direct, photos disponibles, signalements de défauts consultables. L'appel au collaborateur passe de la norme à l'exception.

**Principe 5 : structure de la preuve, pas volume de la preuve.** Il ne s'agit pas de documenter le plus possible. Il s'agit de documenter les bonnes choses de façon opposable : présence, prestation réalisée, remises, défauts, validations client. Le reste, c'est du lest.

**Principe 6 : continuité jusqu'à la facturation.** L'information saisie sur le site doit arriver dans la facture, la paie et la comptabilité sans retraitement manuel. Chaque rupture de support entre les deux est une source d'erreur et un centre de coût.

## Le rôle de la technologie — et ses limites

La technologie ne résout pas ce problème. La technologie rend la solution possible, à condition que l'entreprise soit prête à clarifier ses processus. En pratique, cela signifie trois choses.

Premièrement : la mise en place d'un système, c'est 30 % de projet logiciel et 70 % de projet organisationnel. Inverser le rapport, c'est échouer.

Deuxièmement : le système choisi doit coller à la réalité du terrain, pas à la fantaisie d'un product manager. C'est-à-dire : capable hors-ligne, rapide, utilisable avec des gants de travail, compréhensible sans formation.

Troisièmement : l'opposabilité, la conformité DSGVO/GDPR et la réalité opérationnelle (CSE, conventions collectives, contrôlabilité par les caisses sociales) ne sont pas des « nice-to-have ». Ce sont des critères éliminatoires.

## Un mot honnête pour finir

La communication terrain-bureau sera dans les prochaines années un facteur de compétitivité dans les secteurs opérationnels. Pas parce qu'elle deviendrait soudain plus importante — elle l'a toujours été. Mais parce que les entreprises qui la résolvent affichent des KPIs mesurablement meilleurs sur presque tous les indicateurs :

Des marges plus solides grâce à un chiffrage fiable. Moins de coût de réclamation grâce à des preuves complètes. Une charge administrative nettement réduite au bureau. Une fidélisation supérieure grâce à moins de « paperasse en heures sup ». Et une entreprise pilotable même en croissance, sans que la direction se noie dans l'opérationnel.

Quiconque croit encore qu'on règle ce sujet avec plus de discipline, de meilleurs groupes de messagerie ou un second poste de secrétariat construit, sur trois à cinq ans, un désavantage compétitif qu'il aura du mal à rattraper.

La bonne nouvelle : les conditions techniques et organisationnelles pour traiter le problème structurellement existent aujourd'hui, sont abordables et éprouvées. Ce qui manque dans la plupart des cas, ce n'est pas la solution — c'est la décision.

Si cet article a touché un point chez vous : parlez à votre équipe. Pas des outils. Des sept flux d'information de la première section — et de celui qui fonctionne aujourd'hui le moins bien chez vous. La réponse à cette question est presque toujours le bon point de départ.`,
      date: "18 mai 2026",
    },
  },

  "mg-gebaeudeservice-duesseldorf-case-study": {
    en: {
      title: "MG Gebäudeservice Düsseldorf: how 30 employees switched to Taskey in 4 weeks",
      summary:
        "An established Düsseldorf cleaning business with a broad portfolio – offices, doctor's surgeries, production halls. How they moved off paper timesheets and onto Taskey in four weeks, and what changed.",
      metaTitle: "Case study: MG Gebäudeservice Düsseldorf with Taskey | Taskey",
      metaDescription:
        "How a 30-person Düsseldorf cleaning company moved off paper timesheets onto Taskey in 4 weeks – with NFC proof of service, scheduling and live billing.",
      body: `MG Gebäudeservice is one of the established cleaning companies in Düsseldorf. 30 employees, a broad portfolio of sites — office complexes, doctors' practices, production halls. The operation runs well, customers are happy, the team is in sync.

But as in many companies that grew over the years, a lot of processes at MG Gebäudeservice were still anchored in analogue structures. Paper timesheets, scheduling over messenger groups, reporting through Excel. Not because professionalism was lacking — but because it had worked for years.

"It was clear to us that we'd reached a point where the next level was only going to come with better data. The question was never whether to digitalise — it was what to do it with," says Mikolaj.

What was missing wasn't the willingness to change — it was a system that fits the day-to-day reality of a cleaning company. One that the team in the field can use without training. One that immediately shows the office which site is economically on track and where action is needed. And one that doesn't deliver clarity weeks later at the accountant's, but in real time.

MG Gebäudeservice chose Taskey — and made the move from a well-run operation to a data-driven business.

## The challenge in detail

On paper, everything at MG Gebäudeservice ran smoothly. In practice, three things cost unnecessary time and nerves every day.

**Searching for documents instead of working**

A quote from three months ago? Somewhere in the emails. The cleaning report from last Friday? Maybe in the messenger history, maybe in the cloud, maybe printed in a binder. Anyone running a growing business with information spread across five channels knows the feeling: you know the document exists — you just don't know where.

"When a customer called and needed an invoice or a quote, sometimes it took me 15 minutes to find it. Not because we're disorganised, but because everything was in different systems," says Gianluca.

With Taskey, everything is in one place. Quotes, invoices, site data, job history — one click in the dashboard, done. No scrolling through email threads, no rummaging through folders.

**Quotes out faster, jobs in faster**

Every quote that goes out a day late is a job someone else wins. At MG Gebäudeservice, quoting used to be manual — calculation in Excel, formatting in Word, sent by email. It works, but it takes time.

The goal was clear: quotes should go out in minutes, not hours. With stored pricing logic, a professional layout and direct send from the system. Less office work, faster response to the customer.

**Live overview instead of flying blind**

That was the real game-changer. Pulling out the phone on the sofa in the evening and seeing instantly: Citypark site is being cleaned right now, shift started at 7:30 pm, Ms. Müller is on site. Medicum site is already finished, cleaning took 2.5 hours — exactly as quoted.

Before, it was a black box. You built the plan in the morning and hoped everything ran. Whether things were actually cleaned, when and by whom — you found out when the paper slips came in. Or when the customer complained.

"I don't have to chase people on the phone any more. I open the app and see everything. Which employee is where, how long the site takes, whether the schedule holds. That gives me a calm I didn't have before," says Mikolaj.

For MG Gebäudeservice's clients, that means: complete documentation, available at any time. For the management, it means: control without micromanagement. And for the team it means: clear structures, fewer questions, more ownership.

## The solution — Taskey in action

The switch at MG Gebäudeservice wasn't a months-long IT migration. It was an afternoon.

**NFC tags at every site and every room**

NFC tags were placed at the sites and inside the individual rooms and areas — small stickers, barely visible, practically indestructible. The principle couldn't be simpler: the employee arrives, holds the smartphone to the tag, checked in. Room done, scan the next tag, on to the next area.

No paper, no phone call, no app entry. Phone to the tag — that's it.

For MG Gebäudeservice, that solved two things at once. First: time tracking runs automatically, to the second, tamper-proof. Second — and this was the actual added value — a complete record at room level emerges. Not just "Citypark site was cleaned", but "reception area done at 7:47 pm, open-plan office 2nd floor done at 8:23 pm, sanitary facilities done at 8:41 pm."

"If a customer asks whether a specific area was cleaned, I no longer have to call my employee. I look at the dashboard and have the answer in three seconds," says Gianluca.

**Scheduling? Takes care of itself**

Before, scheduling at MG Gebäudeservice looked like this: Excel sheet with shift plans, changes pushed via chat, hoping everyone had the current version. In case of sickness or no-shows: phone rally.

With Taskey, the entire scheduling is digital. Set up sites, assign employees, define shift times — everything in the system. Changes arrive in real time on the employee's phone. No back-and-forth, no outdated plans, no "I didn't know I was supposed to be there today."

That doesn't just save admin time. It eliminates an entire source of error. If the plan is digital and every employee sees it live on the smartphone, there are no more misunderstandings.

**Everything in one system**

Creating quotes, scheduling jobs, capturing time, documenting sites, writing invoices — at MG Gebäudeservice, this now runs through a single dashboard. No five different tools, no Excel as the bridge between them.

For management, that means: one source of truth. For the office team: fewer steps, fewer mistakes. And for the team in the field: an app they understood in two minutes.

## The results after two weeks

Two weeks. That's all it took to clearly feel the first differences.

**Time tracking: from hours to seconds**

Before, collecting, checking and transferring timesheets at MG Gebäudeservice took around 8–10 hours per month — spread across the office team and the management. With NFC check-ins at the sites, that workload has dropped to nearly zero. Times land automatically in the system, to the second and without manual intervention.

**Scheduling: 3 hours saved per week**

Manual coordination via Excel and chat used to eat up a solid 3 hours per week — building shift plans, communicating changes, answering questions. Since scheduling runs digitally through Taskey, 20 minutes are enough. Changes arrive in real time on the team's phones; follow-up questions have almost completely disappeared.

**Client communication: from gut feel to documentation**

When a client now asks whether and when a specific site was cleaned, MG Gebäudeservice has the answer in seconds. No calls, no checking with the team. The dashboard shows timestamps, employees and room-level detail — complete and digital. For a business built on trust and reliability, that's a real competitive edge.

**The numbers at a glance**

|||
|Time tracking (admin/month)|~10 hours|< 30 minutes|
|Scheduling (per week)|~3 hours|~20 minutes|
|Document lookup per incident|10–15 minutes|< 30 seconds|
|Customer proof on enquiry|Phone rally|3 clicks in the dashboard|
|Employee onboarding (app)|—|< 5 minutes|

## Conclusion

MG Gebäudeservice wasn't a poorly run business before. Quite the opposite: 30 employees, a solid customer base, a good name in Düsseldorf. But as in many companies of this size, processes had reached a point where working analogue cost more energy than it delivered.

Two weeks with Taskey were enough to noticeably reduce the daily friction. No more lost timesheets, no more chat coordination, no more hunting for documents. Instead: a system that shows management in real time where the operation stands — and that the field team understood in two minutes.

Gianluca of MG Gebäudeservice sums it up:

> "Taskey fundamentally changed our internal processes — from time tracking to scheduling to documentation. But what convinced me personally most is the effect on the outside. Our clients see that we work professionally. When a client has a question, we can produce complete documentation within seconds. That builds trust on a whole different level. Taskey lets us offer our clients comprehensive quality management — and that's exactly what differentiates us today from many competitors. I can recommend Taskey to any business that doesn't just want to get better internally, but also wants to show on the outside what it actually delivers."`,
      date: "April 24, 2026",
    },
    fr: {
      title: "MG Gebäudeservice Düsseldorf : comment 30 employés ont basculé sur Taskey en 4 semaines",
      summary:
        "Un nettoyeur établi à Düsseldorf, portefeuille large – bureaux, cabinets médicaux, halls de production. Comment ils ont quitté les fiches papier pour Taskey en quatre semaines, et ce qui a changé.",
      metaTitle: "Étude de cas : MG Gebäudeservice Düsseldorf avec Taskey | Taskey",
      metaDescription:
        "Comment une entreprise de nettoyage de 30 personnes à Düsseldorf a quitté les fiches papier pour Taskey en 4 semaines – avec preuve NFC, planification et facturation en direct.",
      body: `MG Gebäudeservice fait partie des entreprises de nettoyage établies à Düsseldorf. 30 collaborateurs, un portefeuille de sites large — complexes de bureaux, cabinets médicaux, halls de production. L'entreprise tourne bien, les clients sont satisfaits, l'équipe est rodée.

Mais comme dans beaucoup d'entreprises qui ont grandi avec le temps, de nombreux processus chez MG Gebäudeservice restaient ancrés dans des structures analogiques. Fiches d'heures papier, coordination via des groupes de messagerie, reporting sous Excel. Pas par manque de professionnalisme — mais parce que ça avait fonctionné pendant des années.

« On savait qu'on était arrivés à un point où le palier suivant ne se franchirait qu'avec de meilleures données. La question n'a jamais été de savoir si on allait digitaliser, mais avec quoi », dit Mikolaj.

Ce qui manquait, ce n'était pas la volonté de changer — c'était un système qui colle à la réalité quotidienne d'une entreprise de nettoyage. Un système que les équipes terrain peuvent utiliser sans formation. Qui montre tout de suite au bureau quel site tient économiquement et où il faut ajuster. Et qui n'apporte pas la clarté des semaines plus tard chez l'expert-comptable, mais en temps réel.

MG Gebäudeservice a choisi Taskey — et a fait le pas d'une entreprise bien tenue à une entreprise pilotée par les données.

## Le défi en détail

Sur le papier, tout tournait rond chez MG Gebäudeservice. En pratique, trois choses coûtaient chaque jour du temps et des nerfs en trop.

**Chercher des documents au lieu de travailler**

Un devis d'il y a trois mois ? Quelque part dans les e-mails. Le compte rendu de nettoyage de vendredi dernier ? Peut-être dans le fil de la messagerie, peut-être dans le cloud, peut-être imprimé dans un classeur. Quiconque gère une entreprise en croissance avec de l'information éclatée sur cinq canaux connaît la sensation : on sait que le document existe — on ne sait juste plus où.

« Quand un client appelait pour une facture ou un devis, il m'arrivait de chercher pendant 15 minutes. Pas parce qu'on est désorganisés, mais parce que tout était dans des systèmes différents », dit Gianluca.

Avec Taskey, tout est désormais à un seul endroit. Devis, factures, données de site, historique des missions — un clic dans le tableau de bord, terminé. Plus de scroll dans les fils d'e-mails, plus de fouille dans les classeurs.

**Des devis qui sortent plus vite, des missions qui rentrent plus vite**

Chaque devis qui sort un jour trop tard est une mission qu'un autre décroche. Chez MG Gebäudeservice, la préparation des devis se faisait à la main — chiffrage sous Excel, mise en forme sous Word, envoi par e-mail. Ça marche, mais ça prend du temps.

L'objectif était clair : les devis doivent sortir en minutes, pas en heures. Avec des bases de calcul enregistrées, une mise en page professionnelle et un envoi direct depuis le système. Moins de charge au bureau, réaction plus rapide vis-à-vis du client.

**Vue d'ensemble en direct au lieu de vol à vue**

C'est ça, le vrai game-changer. Le soir, sortir son téléphone sur le canapé et voir tout de suite : le site Citypark est en cours de nettoyage, la vacation a commencé à 19h30, Mme Müller est sur place. Le site Medicum est déjà terminé, le nettoyage a duré 2,5 heures — exactement comme chiffré.

Avant, c'était une boîte noire. On faisait le plan le matin et on espérait que ça tienne. Si c'était vraiment nettoyé, quand et par qui — on l'apprenait quand les fiches arrivaient. Ou quand le client se plaignait.

« Je n'ai plus à courir après personne au téléphone. J'ouvre l'application et je vois tout. Quel agent est où, combien de temps prend le site, si le planning tient. Ça me donne un calme que je n'avais pas avant », dit Mikolaj.

Pour les clients de MG Gebäudeservice, ça veut dire : une documentation complète, consultable à tout moment. Pour la direction : du contrôle sans micromanagement. Et pour l'équipe : des structures claires, moins de questions, plus de responsabilisation.

## La solution — Taskey en action

Le basculement chez MG Gebäudeservice n'a pas été une migration IT de plusieurs mois. C'était un après-midi.

**Des tags NFC à chaque site et dans chaque pièce**

Des tags NFC ont été apposés sur les sites et dans les différentes pièces et zones — petits autocollants, à peine visibles, pratiquement indestructibles. Le principe est on ne peut plus simple : l'agent arrive, approche son smartphone du tag, check-in. Pièce terminée, scan du tag suivant, on passe à la zone suivante.

Pas de papier, pas d'appel, pas de saisie dans l'application. Téléphone contre le tag — c'est tout.

Pour MG Gebäudeservice, cela a réglé deux choses d'un coup. Premièrement : le pointage est automatique, à la seconde, infalsifiable. Deuxièmement — et c'était la vraie valeur ajoutée — une documentation complète émerge au niveau de la pièce. Pas seulement « le site Citypark a été nettoyé », mais « accueil terminé à 19h47, plateau open space au 2e étage terminé à 20h23, sanitaires terminés à 20h41 ».

« Quand un client demande si une zone précise a été nettoyée, je n'ai plus à appeler mon agent. Je regarde le tableau de bord et j'ai la réponse en trois secondes », dit Gianluca.

**La planification ? Elle se fait toute seule**

Avant, la planification chez MG Gebäudeservice ressemblait à ceci : un tableau Excel avec les plannings de vacation, les changements communiqués par chat, l'espoir que chacun ait bien la dernière version. En cas d'absence ou de maladie : rallye téléphonique.

Avec Taskey, toute la planification est digitale. On crée les sites, on assigne les collaborateurs, on définit les horaires — tout est dans le système. Les changements arrivent en temps réel sur le téléphone du collaborateur. Plus d'allers-retours, plus de plannings périmés, plus de « je ne savais pas que je devais être là aujourd'hui ».

Cela ne fait pas qu'économiser du temps administratif. Cela élimine une source d'erreur entière. Quand le plan est digital et que chaque agent l'a en direct sur son smartphone, il n'y a plus de malentendus.

**Tout dans un seul système**

Faire des devis, planifier les interventions, pointer les heures, documenter les sites, facturer — chez MG Gebäudeservice, tout cela passe maintenant par un tableau de bord unique. Pas cinq outils différents, pas d'Excel comme pont entre eux.

Pour la direction, ça veut dire : une seule source de vérité. Pour l'équipe bureau : moins de manipulations, moins d'erreurs. Et pour les équipes terrain : une application qu'elles ont comprise en deux minutes.

## Les résultats après deux semaines

Deux semaines. Il n'en a pas fallu plus pour ressentir clairement les premières différences.

**Pointage : de heures à secondes**

Avant, la collecte, le contrôle et la saisie des fiches d'heures chez MG Gebäudeservice coûtaient environ 8 à 10 heures par mois — réparties entre l'équipe bureau et la direction. Avec les pointages NFC sur les sites, cette charge est tombée à presque zéro. Les heures arrivent automatiquement dans le système, à la seconde et sans intervention manuelle.

**Planification : 3 heures économisées par semaine**

La coordination manuelle via Excel et chat prenait facilement 3 heures par semaine — construire les plannings, communiquer les changements, répondre aux questions. Depuis que la planification passe par Taskey, 20 minutes suffisent. Les changements arrivent en temps réel sur les téléphones des équipes ; les questions de suivi ont quasiment disparu.

**Communication client : de l'intuition à la documentation**

Quand un donneur d'ordre demande aujourd'hui si et quand un site précis a été nettoyé, MG Gebäudeservice a la réponse en quelques secondes. Pas d'appel, pas de vérification auprès de l'équipe. Le tableau de bord affiche horodatages, agents et niveau de pièce — complet et digital. Pour une entreprise dont le métier repose sur la confiance et la fiabilité, c'est un vrai avantage concurrentiel.

**Les chiffres en un coup d'œil**

|||
|Pointage (admin/mois)|~10 heures|< 30 minutes|
|Planification (par semaine)|~3 heures|~20 minutes|
|Recherche de document par incident|10–15 minutes|< 30 secondes|
|Preuve client sur demande|Rallye téléphonique|3 clics dans le tableau de bord|
|Onboarding collaborateur (app)|—|< 5 minutes|

## Conclusion

MG Gebäudeservice n'était pas une entreprise mal organisée avant. Au contraire : 30 collaborateurs, un portefeuille de clients solide, une bonne réputation à Düsseldorf. Mais comme dans beaucoup d'entreprises de cette taille, les processus avaient atteint un point où l'analogique coûtait plus d'énergie qu'il n'en rapportait.

Deux semaines avec Taskey ont suffi pour réduire sensiblement les frictions quotidiennes. Plus de fiches d'heures perdues, plus de coordination par chat, plus de chasse aux documents. À la place : un système qui montre à la direction en temps réel où en est l'entreprise — et que les équipes terrain ont compris en deux minutes.

Gianluca, de MG Gebäudeservice, le résume ainsi :

> « Taskey a transformé en profondeur nos processus internes — du pointage à la planification jusqu'à la documentation. Mais ce qui m'a personnellement le plus convaincu, c'est l'effet vers l'extérieur. Nos clients voient que nous travaillons de façon professionnelle. Quand un donneur d'ordre a une question, on peut produire une documentation complète en quelques secondes. Cela crée de la confiance à un tout autre niveau. Taskey nous permet d'offrir à nos clients un management de la qualité complet — et c'est exactement ce qui nous distingue aujourd'hui de beaucoup de concurrents. Je peux recommander Taskey à toute entreprise qui ne veut pas seulement s'améliorer en interne, mais aussi montrer vers l'extérieur ce qu'elle livre vraiment. »`,
      date: "24 avril 2026",
    },
  },

  "zeiterfassung-gebaeudereinigung-nfc": {
    en: {
      title: "Time tracking in commercial cleaning: why NFC beats every other method",
      summary:
        "Paper timesheets, fingerprint scanners, kiosk apps – we've seen every variant. Here's why NFC is the only one that actually works in the day-to-day reality of commercial cleaning.",
      metaTitle: "Time tracking in cleaning: why NFC wins | Taskey",
      metaDescription:
        "Paper, fingerprints, kiosks – we've tested every time-tracking method in commercial cleaning. Here's why NFC is the only one that survives the day-to-day reality.",
      body: `Monday, 6:00 am. Your team fans out. Four sites, three shifts, twelve people. At the end of the day, a stack of handwritten timesheets lands on your desk. One is missing. Two are illegible. And on one, the times don't add up front to back.

You spend an extra hour in the evening typing it all into Excel. Then another hour when the accountant asks. And if a customer wants to know exactly when their site was cleaned? Good luck.

This isn't a one-off. This is everyday life in commercial cleaning. And it costs you real money every month.

**The problem isn't your team. The problem is the system.**

Cleaning staff work decentrally. They're alone in an office building in the morning, in a shopping centre in the evening, in a production hall at night. There's no central time clock to punch in and out at. So things get improvised: messenger messages, phone calls to the boss, paper slips in a jacket pocket — or nothing gets logged at all and it gets written from memory at month end.

The result: you have no reliable data. Not for payroll, not for the client, not for yourself. You don't know whether site A really takes 3.5 hours or whether there's half an hour of buffer baked in. You can't cleanly calculate your margins. And when someone claims they were on site — you have no proof.

Since 2022, electronic time tracking is mandatory in Germany. "We somehow handle it" is no longer an option.

**NFC time tracking: clock in in two seconds, right at the site**

The solution is simpler than you think — and it fits in a pocket.

Here's how it works: you stick a small NFC tag at each site. Door frame, cleaning cupboard, reception counter — anywhere. Your employee arrives, holds the smartphone up to it, done. Clocked in. Location, time, site — all captured automatically. On the way out, tap again. Clocked out.

No pen. No paper. No opening an app and typing in times manually. Phone to the tag — that's it.

The data lands in your Taskey dashboard in real time. You see immediately who's working where, how long a site takes, whether the schedule holds. Not tomorrow, not at month end — now.

**What that concretely gives you**

End of timesheet chaos. All working hours are digital, captured to the second, tamper-proof. No typing, no chasing, no guessing at month end. The data flows straight into payroll.

Site-level analysis. You see at a glance which site eats how much time. If a job consistently takes longer than quoted, you spot it immediately — not after the margin has evaporated. That's the foundation for clean post-job costing and better quotes.

Proof to the client. Your client wants to know whether and when work was done? You send them the data. Objective, digital, complete. That builds trust and prevents arguments.

Legal certainty. Electronic time tracking is mandatory. With Taskey you're covered — no extra hardware, no expensive terminals, no IT overhead. Everything runs on the smartphone your team is already carrying.

**Why traditional time-tracking tools fail in cleaning**

There are hundreds of time-tracking apps on the market. Most are built for desk jobs. Fixed workplace, fixed team, one location.

That doesn't work in commercial cleaning. Your team rotates sites daily. Some staff speak limited German. Some aren't technically inclined. And most don't feel like tapping around in a complicated app for five minutes after a shift.

That's exactly why Taskey uses NFC. The threshold is essentially zero. Smartphone to the tag — that's all anyone needs to know. No login, no menu navigation, no typing. It works for the 20-year-old student as much as for the experienced cleaner who's never used a business app.

**What makes Taskey different**

Taskey isn't a pure time-tracking app. It's scheduling, time tracking, job management and documentation in one system. For you that means: you plan the job, your team clocks in and out by NFC, the times flow automatically into the jobs, and you bill directly.

One system. No patchwork of three different tools, an Excel sheet and two messenger groups.

Taskey is fully GDPR-compliant, Made in Germany, and runs on every smartphone. No specialised hardware to install. No half-day training session. Your team can start this afternoon.

**The maths is simple**

Say you have 20 staff. Each one spends 10 minutes a day filling in slips, noting times, sending chat updates. That's over 30 hours a month — just for time tracking. Plus your own hours collecting, checking and transferring it.

With NFC check-ins and automatic capture, that disappears. Completely. The time you save is money — or better: time you can put into sales, quality control, or simply ending the day on time.

**Start without risk**

Taskey offers a starter package you can begin with immediately. NFC tags cost a few euros each and last for years. Setup takes less than an hour.

No 24-month contract. No sales pitch that sugar-coats everything first. You book a free demo, look at the system, and decide for yourself.

If you're done chasing timesheets every month — now is the right time to change it.`,
      date: "March 30, 2026",
    },
    fr: {
      title: "Pointage en nettoyage : pourquoi le NFC bat toutes les autres méthodes",
      summary:
        "Fiches papier, lecteurs d'empreintes, applis kiosque – nous avons tout testé. Voici pourquoi le NFC est la seule méthode qui tient vraiment dans le quotidien du nettoyage professionnel.",
      metaTitle: "Pointage en nettoyage : pourquoi le NFC l'emporte | Taskey",
      metaDescription:
        "Papier, empreintes, kiosques – nous avons tout testé en nettoyage professionnel. Voici pourquoi le NFC est la seule méthode qui survit au quotidien.",
      body: `Lundi, 6h00. Votre équipe se déploie. Quatre sites, trois vacations, douze agents. En fin de journée, une pile de fiches d'heures manuscrites atterrit sur votre bureau. Une manque. Deux sont illisibles. Et sur une, les horaires ne tiennent pas debout d'un bout à l'autre.

Vous y passez encore une heure le soir pour tout saisir dans Excel. Puis une autre heure quand l'expert-comptable demande. Et si un client veut savoir exactement quand son site a été nettoyé ? Bonne chance.

Ce n'est pas un cas isolé. C'est le quotidien du nettoyage professionnel. Et ça vous coûte de l'argent réel chaque mois.

**Le problème n'est pas votre équipe. Le problème, c'est le système.**

Les agents d'entretien travaillent en mode décentralisé. Seuls dans un immeuble de bureaux le matin, dans un centre commercial le soir, dans un hall de production la nuit. Pas de pointeuse centrale pour entrer et sortir. Alors on improvise : messages de chat, appels au chef, papiers dans la poche de la veste — ou rien n'est noté et on écrit de tête à la fin du mois.

Résultat : pas de données fiables. Ni pour la paie, ni pour le client, ni pour vous. Vous ne savez pas si le site A prend vraiment 3,5 heures ou s'il y a une demi-heure de mou dedans. Vous ne pouvez pas chiffrer proprement vos marges. Et si quelqu'un prétend être passé — vous n'avez pas de preuve.

Depuis 2022, le pointage électronique est obligatoire en Allemagne. « On gère ça à peu près » n'est plus une option.

**Pointage NFC : checkin en deux secondes, directement sur le site**

La solution est plus simple que vous ne le pensez — et elle tient dans une poche.

Voici comment ça marche : vous collez un petit tag NFC sur chaque site. Encadrement de porte, local d'entretien, banque d'accueil — peu importe. Votre agent arrive, approche son smartphone, terminé. Pointé. Lieu, heure, site — tout est capté automatiquement. À la sortie, on tape de nouveau. Pointé sortie.

Pas de stylo. Pas de papier. Pas d'application à ouvrir et d'horaires à saisir à la main. Téléphone contre le tag — c'est tout.

Les données arrivent en temps réel dans votre tableau de bord Taskey. Vous voyez immédiatement qui travaille où, combien de temps prend un site, si le planning tient. Pas demain, pas en fin de mois — maintenant.

**Ce que ça vous apporte concrètement**

Fini le chaos des fiches d'heures. Tous les temps de travail sont digitaux, à la seconde près, infalsifiables. Pas de ressaisie, pas de relances, pas de devinettes en fin de mois. Les données partent directement en paie.

Analyse au site près. Vous voyez d'un coup d'œil quel site consomme combien de temps. Si une mission dépasse régulièrement le chiffrage, vous le voyez tout de suite — pas après que la marge se soit envolée. C'est la base d'une post-évaluation propre et de meilleurs devis.

Preuve auprès des clients. Votre donneur d'ordre veut savoir si et quand son site a été nettoyé ? Vous lui envoyez les données. Objectif, digital, complet. Cela crée la confiance et évite les discussions.

Sécurité juridique. Le pointage électronique est obligatoire. Avec Taskey, vous êtes couvert — sans matériel supplémentaire, sans terminaux coûteux, sans charge IT. Tout passe par le smartphone que votre équipe a déjà en poche.

**Pourquoi les outils de pointage classiques échouent dans le nettoyage**

Il existe des centaines d'applis de pointage sur le marché. La plupart sont faites pour les emplois de bureau. Poste fixe, équipe fixe, un seul lieu.

Dans le nettoyage professionnel, ça ne marche pas. Votre équipe change de site chaque jour. Certains parlent peu la langue. D'autres ne sont pas à l'aise avec la technique. Et la plupart n'ont pas envie de pianoter cinq minutes dans une appli compliquée après leur vacation.

C'est précisément pour ça que Taskey mise sur le NFC. La barrière est quasi nulle. Smartphone contre le tag — pas besoin d'en savoir plus. Pas de login, pas de menus à naviguer, pas de saisie. Ça marche pour l'étudiant de 20 ans comme pour l'agent expérimenté qui n'a jamais utilisé d'application pro.

**Ce qui distingue Taskey**

Taskey n'est pas une simple appli de pointage. C'est la planification, le pointage, le pilotage des missions et la documentation dans un seul système. Pour vous, ça veut dire : vous planifiez la mission, votre équipe pointe par NFC, les heures alimentent automatiquement les missions, et vous facturez directement.

Un système. Pas un assemblage de trois outils différents, d'un Excel et de deux groupes de messagerie.

Taskey est totalement conforme DSGVO/GDPR, Made in Germany, et fonctionne sur tout smartphone. Pas de matériel spécifique à installer. Pas de formation qui prend une demi-journée. Votre équipe peut s'y mettre cet après-midi.

**Le calcul est simple**

Mettons que vous avez 20 collaborateurs. Chacun passe 10 minutes par jour à remplir des fiches, noter des heures, envoyer des messages de chat. Ça fait plus de 30 heures par mois — rien que pour le pointage. Plus vos propres heures à collecter, contrôler, ressaisir.

Avec le pointage NFC et la saisie automatique, ça disparaît. Complètement. Le temps que vous gagnez, c'est de l'argent — ou mieux : du temps que vous pouvez mettre dans la prospection, le contrôle qualité, ou simplement votre fin de journée.

**Démarrez sans risque**

Taskey propose un pack de démarrage avec lequel vous pouvez commencer tout de suite. Les tags NFC coûtent quelques euros pièce et durent des années. La mise en place ne prend pas une heure.

Pas de contrat sur 24 mois. Pas d'argumentaire commercial qui enjolive tout d'abord. Vous réservez une démo gratuite, regardez le système, et décidez vous-même.

Si vous en avez assez de courir après les fiches d'heures chaque mois — c'est maintenant le bon moment pour changer.`,
      date: "30 mars 2026",
    },
  },

  "offline-modus": {
    en: {
      title: "Full offline mode",
      summary:
        "No signal on site? No problem. Taskey will soon work fully offline – and sync the moment connectivity returns.",
      metaTitle: "Full offline mode | Taskey",
      metaDescription:
        "Coming soon: Taskey will work fully offline. Create jobs, clock in, tick checklists – everything syncs once you're back online.",
      body: `One of the most-requested features from our community: a true offline mode.

Not just read – but also creating jobs, clocking in, ticking checklists. Everything stored locally, syncing automatically the moment you're back online.

Especially for crews working in basements, tunnels or large construction sites, this is a game changer. We're on it.`,
      date: "Coming soon",
    },
    fr: {
      title: "Mode hors ligne complet",
      summary:
        "Pas de réseau sur le site ? Pas de souci. Taskey fonctionnera bientôt entièrement hors ligne – avec synchronisation dès que la connexion revient.",
      metaTitle: "Mode hors ligne complet | Taskey",
      metaDescription:
        "Bientôt : Taskey fonctionnera entièrement hors ligne. Créer des missions, pointer, cocher des checklists – tout se synchronise dès le retour de la connexion.",
      body: `Une des fonctionnalités les plus demandées par notre communauté : un vrai mode hors ligne.

Pas seulement la lecture – aussi la création de missions, le pointage, les checklists. Tout est stocké localement et synchronisé automatiquement dès que vous êtes de nouveau en ligne.

Surtout pour les équipes qui travaillent en caves, tunnels ou grands chantiers, c'est un game changer. On y travaille.`,
      date: "Prochainement",
    },
  },

  "nfc-tags-update": {
    en: {
      title: "NFC tags now included in every plan",
      summary:
        "NFC tags are now built into every Taskey plan – no separate orders any more. Crews tap tools, machines and vehicles with a single touch.",
      metaTitle: "NFC tags now in every Taskey plan | Update",
      metaDescription:
        "Every Taskey plan now includes NFC tags by default. Tap tools, machines and vehicles to log who took what, when, and when it came back.",
      body: `We spent a long time thinking about how to make NFC as simple as possible. The answer was: just throw it in.

From today, NFC tags are included in every Taskey plan at no extra cost. The number of tags depends on the plan.

The tags arrive by post. You stick them on machines, tool boxes or vehicles. Your team taps them with their phone – and everything is logged automatically. Who took what, when. Who brought it back.

No more disappearing kit. No more arguments. No more paper trail.`,
      date: "March 12, 2026",
    },
    fr: {
      title: "Tags NFC inclus dans chaque plan",
      summary:
        "Les tags NFC sont désormais intégrés à chaque plan Taskey – plus besoin de commandes séparées. Les équipes scannent outils, machines et véhicules d'un simple tap.",
      metaTitle: "Tags NFC dans chaque plan Taskey | Mise à jour",
      metaDescription:
        "Tous les plans Taskey incluent désormais des tags NFC. Scannez outils, machines et véhicules pour enregistrer qui a pris quoi, quand, et quand c'est revenu.",
      body: `On a longuement réfléchi à comment rendre le NFC le plus simple possible. La réponse : on inclut tout.

Désormais, les tags NFC sont inclus dans chaque plan Taskey, sans surcoût. La quantité incluse dépend du plan choisi.

Les tags arrivent par courrier. Vous les collez sur les machines, caisses à outils ou véhicules. Vos équipes approchent leur téléphone – et tout est journalisé automatiquement. Qui a pris quoi, quand. Qui a rapporté.

Plus de matériel qui disparaît. Plus de discussions. Plus de paperasse.`,
      date: "12 mars 2026",
    },
  },

  "taskey-16": {
    en: {
      title: "Taskey 1.6 – Photo gallery & improved GPS",
      summary:
        "Version 1.6 brings a complete photo gallery for projects and jobs, plus real-time GPS tracking.",
      metaTitle: "Taskey 1.6 release notes | Photo gallery & GPS",
      metaDescription:
        "Taskey 1.6 is live. Highlights: per-job photo gallery, faster real-time GPS tracking with 7-day route history, and a tightened navigation.",
      body: `Taskey 1.6 is live. The headline changes:

Photo gallery: Every job and every project now has its own image gallery. Before/after shots, damage documentation, handover photos – all stored on the job and visible to everyone involved.

GPS tracking: Real-time tracking has been rebuilt from the ground up. The map is faster, positions update more frequently, and you can now pull up route history for the last 7 days.

UI refresh: We've tightened the navigation inside the app. Fewer clicks to the information that matters.

The update rolls out automatically – you don't need to do anything.`,
      date: "February 14, 2026",
    },
    fr: {
      title: "Taskey 1.6 – Galerie photo & GPS amélioré",
      summary:
        "La version 1.6 apporte une galerie photo complète pour les projets et missions, ainsi qu'un suivi GPS en temps réel.",
      metaTitle: "Taskey 1.6 release notes | Galerie photo & GPS",
      metaDescription:
        "Taskey 1.6 est disponible. À retenir : galerie photo par mission, suivi GPS temps réel plus rapide avec historique de 7 jours, navigation resserrée.",
      body: `Taskey 1.6 est en ligne. Les principales nouveautés :

Galerie photo : Chaque mission et chaque projet dispose désormais de sa propre galerie d'images. Avant/après, documentation des dommages, photos de réception – tout est stocké sur la mission et visible par toutes les parties prenantes.

Suivi GPS : Le tracking en temps réel a été entièrement refait. La carte est plus rapide, les positions sont mises à jour plus souvent, et vous pouvez consulter l'historique de tournée sur les 7 derniers jours.

Refonte UI : Nous avons resserré la navigation dans l'application. Moins de clics jusqu'à l'information importante.

La mise à jour est déployée automatiquement – vous n'avez rien à faire.`,
      date: "14 février 2026",
    },
  },

  "enterprise-launch": {
    en: {
      title: "Taskey Enterprise is here",
      summary:
        "For businesses with 50+ employees or custom requirements: own integrations, dedicated support, bespoke workflows.",
      metaTitle: "Taskey Enterprise is here | Custom plans for large operations",
      metaDescription:
        "Taskey Enterprise: custom integrations, dedicated support and bespoke workflows for cleaning and facility businesses with 50+ employees.",
      body: `Since Taskey launched, we've kept hearing from operations that need more than what our standard plans cover.

Large teams. Specific integrations. Their own billing systems. Complex role structures.

That's what Taskey Enterprise is for.

What it means: we sit down with you, get to know your operation – and then build the version of Taskey that you need. With your branding, your workflows, your integrations.

No one-size package. No compromises.

Interested? Just get in touch.`,
      date: "January 20, 2026",
    },
    fr: {
      title: "Taskey Enterprise est là",
      summary:
        "Pour les entreprises de 50+ employés ou aux besoins spécifiques : intégrations dédiées, support dédié, workflows sur mesure.",
      metaTitle: "Taskey Enterprise est là | Plans sur mesure pour grandes opérations",
      metaDescription:
        "Taskey Enterprise : intégrations sur mesure, support dédié et workflows personnalisés pour les entreprises de nettoyage et facility de plus de 50 employés.",
      body: `Depuis le lancement de Taskey, des entreprises nous contactent régulièrement avec des besoins qui dépassent nos plans standard.

Grandes équipes. Intégrations spécifiques. Systèmes de facturation propriétaires. Structures de rôles complexes.

C'est précisément ce que couvre Taskey Enterprise.

Concrètement : on s'assoit avec vous, on comprend votre activité – et on construit la version de Taskey dont vous avez besoin. Avec votre branding, vos workflows, vos interfaces.

Pas de pack unique. Pas de compromis.

Intéressé ? Contactez-nous directement.`,
      date: "20 janvier 2026",
    },
  },
};

export function getPostTranslation(slug: string, locale: "en" | "fr"): PostTranslation | undefined {
  return T[slug]?.[locale];
}
