---
layout: post
title: "Personalizing the Springboard and Navigator for a Smooth Redwood Transition"
---

Redwood is the biggest user experience upgrade Oracle Fusion has ever shipped, and Oracle is rolling it out the responsible way: release by release, behind opt ins and profile options, so every customer controls its own pace. That flexibility is a gift for implementation teams. It also means that during the transition window, both the new Redwood pages and their familiar predecessors can be visible at the same time.

This is exactly where a well curated springboard and Navigator earn their money. A few minutes in one tool lets a customer decide precisely what each user sees: hide what a team has moved past, keep what a team still needs, and even add shortcuts to reports and tools that were never on the home page before. Clients ask for this constantly, and it is one of the fastest wins in any Redwood adoption plan.

## Why this matters for rollout teams

Most Fusion customers cascade knowledge in two hops. Consultants enable the SMEs first, the functional key users who know the business inside out. Those SMEs then carry the new Redwood pages to the wider business user population. That cascade works best when the home page matches the material: business users should see one clear path per task, while SMEs may still need access to the earlier pages for comparison and support during the changeover. Both needs can be met from the same configuration screen, at the same time.

## What Redwood brings to the home page

Two things arrive together. First, Redwood versions of pages light up as their profile options and opt ins are enabled. Second, navigation gets smarter through consolidation. Purchasing is the flagship example: the Redwood Purchasing landing page brings purchase orders, purchase agreements, and negotiations together into one modern entry point with tasks and key performance indicators in a single view. Many businesses adopt it immediately. Others prefer to keep the three familiar icons alongside it while buyers adjust. Oracle's tooling supports either choice.

## The tool: Structure

The Structure tool controls what appears on the **Navigator** (the main menu behind the hamburger icon) and the **springboard** (the home page icons). A useful distinction before starting: profile options and opt ins decide which experience a page opens in, while Structure decides what users can see and click. Together they let a rollout team shape the entire journey.

Structure changes happen inside a sandbox, so nothing reaches users until the sandbox is published.

## Step 1: Create and enter a sandbox

1. Go to **Navigator > Configuration > Sandboxes**.
2. Click **Create Sandbox** and give it a clear name, something like REDWOOD_NAV_JUL2026.
3. Select **Structure** in the tools list.
4. Click **Create and Enter**. A sandbox banner appears at the top of the page.
5. From the **Tools** menu on that banner, select **Structure**.

The Navigation Configuration page opens, listing every group and page entry behind the Navigator and springboard.

## Step 2: Retire entries a team has moved past

Once a team fully adopts a Redwood page, keeping its predecessor on the menu only splits attention. Click the entry name to edit it. Two settings matter:

* **Show on Navigator** controls the main menu.
* **Show on Springboard** controls the home page icon.

Set both to **No**, save, and the entry disappears once the sandbox publishes. One rule to memorize: an item cannot appear on the springboard only. Hiding something from the Navigator hides it from the springboard automatically.

## Step 3: Phase the change for SMEs

The cascade model means SMEs often need the earlier pages a little longer than everyone else, for side by side comparison and for supporting the first wave of business users. Instead of a hard No, choose **EL Expression** and keep an entry visible to specific roles only:

```
#{securityContext.userInRole['ORA_FND_APPLICATION_ADMINISTRATOR_JOB']}
```

Business users get a clean, focused menu from day one, while the SME group keeps its reference point. When the transition settles, the expression becomes a plain No. Spelling matters: a mistyped role name evaluates to false and hides the entry from everybody.

## Step 4: Keep familiar icons where the business wants them

For customers who want purchase orders, purchase agreements, and negotiations as individual springboard icons alongside the consolidated Purchasing landing page, the same screen delivers. From the **Create** menu, select **Create Page Entry**, then give each entry a name, an icon, and a group, and point it at the relevant application page. Familiar shortcuts return, and the new landing page keeps doing its job next to them.

## Step 5: Add reports and tools to the home page

This is the part many teams discover last, and it is the most fun. A page entry does not have to point at a standard work area. The **Link Type** field accepts:

* An **application page** inside Fusion.
* A **static URL** for a destination that never changes.
* A **dynamic URL** for destinations whose host may change between environments.

That opens the door to a genuinely tailored home page. A daily buyer dashboard built in OTBI can sit one click from login. A company SOP portal, a data load tool, or a frequently run report can live as its own icon inside a custom group named for the company. Combined with EL expressions, each of those shortcuts can appear only for the roles that need it. The springboard stops being a menu and becomes a launchpad.

## Step 6: Test, then publish

Stay inside the sandbox and walk the home page and Navigator as a business user, then as an SME. When both journeys read clean, publish the sandbox from the banner. The change is instant for everyone on their next page load.

## Field notes from real projects

* Revisit this after every quarterly update. Each release brings new Redwood pages, and the curation should keep pace with adoption.
* Keep a simple sheet of every entry hidden, added, or restricted, with the expression used. It answers "where did that icon go" in seconds.
* Align the publish with the SME cascade schedule, so the menu users see always matches the material they were just shown.

Redwood gives every customer a cleaner, smarter starting point. A short session in Structure makes it feel tailor made, and that is usually the moment a rollout starts to feel finished.

More practical Oracle Fusion walkthroughs land here every day. Video versions live on the SCM Simplified YouTube channel.
