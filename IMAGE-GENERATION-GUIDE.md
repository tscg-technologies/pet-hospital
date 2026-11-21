# GOOGLE FLOW IMAGE GENERATION GUIDE — PET HOSPITAL DEMO WEBSITE

This document provides the complete, copy-ready **Google Flow** image generation prompts for every image placeholder used across the 7-page **PET HOSPITAL** demonstration website.

All placeholders in the HTML files have been built with responsive CSS aspect-ratio containers, subtle `"Image Placeholder"` badges, and exact target filenames so generated `.webp` assets can be dropped in seamlessly.

---

## 1. COMPLETE IMAGE INVENTORY TABLE

| Image # | Exact Filename | Website Page(s) | Website Section | Aspect Ratio | Recommended Resolution | Orientation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | `pet-hospital-hero.webp` | `index.html` | Hero Section (Split-Screen Right Visual) | `16:10` | `1920 × 1200 px` | Landscape |
| **02** | `dog-health-care.webp` | `index.html`, `pet-care.html` | Animals We Care For (Dogs) & Dog Health Section | `4:3` / `16:9` | `1600 × 1200 px` | Landscape |
| **03** | `cat-health-care.webp` | `index.html`, `pet-care.html` | Animals We Care For (Cats) & Cat Health Section | `4:3` / `16:9` | `1600 × 1200 px` | Landscape |
| **04** | `bird-health-care.webp` | `index.html`, `pet-care.html` | Animals We Care For (Birds) & Bird Health Section | `4:3` / `16:9` | `1600 × 1200 px` | Landscape |
| **05** | `small-pet-care.webp` | `index.html`, `pet-care.html` | Animals We Care For (Small Pets) & Small Pet Health | `4:3` / `16:9` | `1600 × 1200 px` | Landscape |
| **06** | `demo-vet-profile-1.webp` | `index.html`, `team.html` | Meet the Veterinary Team (Profile Card 1) | `4:5` | `1200 × 1500 px` | Portrait |
| **07** | `demo-vet-profile-2.webp` | `index.html`, `team.html` | Meet the Veterinary Team (Profile Card 2) | `4:5` | `1200 × 1500 px` | Portrait |
| **08** | `demo-vet-profile-3.webp` | `index.html`, `team.html` | Meet the Veterinary Team (Profile Card 3) | `4:5` | `1200 × 1500 px` | Portrait |
| **09** | `about-veterinary-clinic.webp` | `about.html` | Introduction to Veterinary Healthcare | `16:10` | `1920 × 1200 px` | Landscape |
| **10** | `compassionate-pet-handling.webp` | `about.html` | Preventive Care & Communication Section | `16:10` | `1920 × 1200 px` | Landscape |
| **11** | `veterinary-consultation.webp` | `services.html` | Service 01: General Veterinary Consultation | `4:3` | `1600 × 1200 px` | Landscape |
| **12** | `pet-vaccination.webp` | `services.html` | Service 02: Vaccination & Preventive Care | `4:3` | `1600 × 1200 px` | Landscape |
| **13** | `pet-diagnostics.webp` | `services.html` | Service 03: Diagnostics & Laboratory Services | `4:3` | `1600 × 1200 px` | Landscape |
| **14** | `veterinary-surgery.webp` | `services.html` | Service 04: Veterinary Surgery | `4:3` | `1600 × 1200 px` | Landscape |
| **15** | `pet-dental-care.webp` | `services.html` | Service 05: Dental Care | `4:3` | `1600 × 1200 px` | Landscape |
| **16** | `pet-wellness.webp` | `services.html` | Service 06: Grooming & Wellness | `4:3` | `1600 × 1200 px` | Landscape |
| **17** | `veterinary-team.webp` | `team.html` | Collaborative Veterinary Care Overview | `16:10` | `1920 × 1200 px` | Landscape |

---

## 2. SUMMARY COUNTS & ORIENTATION BREAKDOWN

- **Total Unique Image Filenames:** `17`
- **Total HTML Placeholder Instances Across All 7 Pages:** `24` (7 filenames are reused across `index.html`, `team.html`, and `pet-care.html` for visual consistency)
- **Orientation Counts (Unique Assets):**
  - **Landscape (`16:10`, `4:3`, `16:9`):** `14` images
  - **Portrait (`4:5`):** `3` images
  - **Square (`1:1`):** `0` images

---

## 3. EXACT FILENAME MAPPING BY PAGE

1. **`index.html` (Home — 10 placeholders):**
   - `pet-hospital-hero.webp`
   - `dog-health-care.webp`
   - `cat-health-care.webp`
   - `bird-health-care.webp`
   - `small-pet-care.webp`
   - `demo-vet-profile-1.webp`
   - `demo-vet-profile-2.webp`
   - `demo-vet-profile-3.webp`
2. **`about.html` (About the Hospital — 2 placeholders):**
   - `about-veterinary-clinic.webp`
   - `compassionate-pet-handling.webp`
3. **`services.html` (Veterinary Services — 6 placeholders):**
   - `veterinary-consultation.webp`
   - `pet-vaccination.webp`
   - `pet-diagnostics.webp`
   - `veterinary-surgery.webp`
   - `pet-dental-care.webp`
   - `pet-wellness.webp`
4. **`team.html` (Veterinary Team — 4 placeholders):**
   - `veterinary-team.webp`
   - `demo-vet-profile-1.webp`
   - `demo-vet-profile-2.webp`
   - `demo-vet-profile-3.webp`
5. **`emergency.html` (Emergency Information — 0 photography placeholders):**
   - Uses high-contrast warning icons and clean typography without distracting imagery.
6. **`pet-care.html` (Pet Health & Care Resources — 4 placeholders):**
   - `dog-health-care.webp`
   - `cat-health-care.webp`
   - `bird-health-care.webp`
   - `small-pet-care.webp`
7. **`contact.html` (Contact & Appointment Enquiry — 0 photography placeholders):**
   - Focuses on fictional contact details and the interactive appointment request form.

---

## 4. RECOMMENDED IMAGE GENERATION ORDER

1. **Priority Tier 1 — Homepage Hero & Core Service Visuals:**
   - `pet-hospital-hero.webp`
   - `veterinary-consultation.webp`
   - `pet-vaccination.webp`
   - `pet-diagnostics.webp`
   - `veterinary-surgery.webp`
   - `pet-dental-care.webp`
   - `pet-wellness.webp`
2. **Priority Tier 2 — Species Care Visuals (Shared on Home & Pet Care Pages):**
   - `dog-health-care.webp`
   - `cat-health-care.webp`
   - `bird-health-care.webp`
   - `small-pet-care.webp`
3. **Priority Tier 3 — About & Team Overview Visuals:**
   - `about-veterinary-clinic.webp`
   - `compassionate-pet-handling.webp`
   - `veterinary-team.webp`
4. **Priority Tier 4 — Demo Team Portraits (Shared on Home & Team Pages):**
   - `demo-vet-profile-1.webp`
   - `demo-vet-profile-2.webp`
   - `demo-vet-profile-3.webp`

---

## 5. DETAILED GOOGLE FLOW PROMPTS FOR EVERY PLACEHOLDER

---

### IMAGE 01: `pet-hospital-hero.webp`
- **Image Number:** 01
- **Exact Filename:** `pet-hospital-hero.webp`
- **Website Page:** `index.html` (Home)
- **Website Section:** Hero Section (Split-Screen Visual)
- **Subject Description:** A compassionate veterinarian in clean navy medical scrubs gently examining a calm golden retriever dog on a stainless steel examination table with a soft non-slip teal mat.
- **Aspect Ratio:** `16:10`
- **Recommended Resolution:** `1920 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium-wide editorial shot, rule-of-thirds placement with the veterinarian and dog centered-right.
- **Camera Angle:** Eye-level with the dog and veterinarian, creating warmth and trust.
- **Lighting:** Soft, abundant natural daylight streaming from a large clinic window on the left, balanced with warm clinical interior lighting.
- **Background:** Uncluttered, modern veterinary consultation room with soft mint and warm white walls, out-of-focus cabinets, no text or hospital logos.
- **Visual Style:** Premium editorial healthcare photography, photorealistic, crisp focus, reassuring and calm mood.
- **Colour Palette:** Navy blue (`#17324D`), medical blue (`#3185C5`), soft teal (`#35AFA3`), warm golden fur tones, and clean white (`#FAFCFB`).
- **Subject Positioning:** Veterinarian on the right leaning in gently; golden retriever sitting calmly in the center-left looking relaxed.
- **Negative Space for Website Text:** Clean airy margin along the upper-left 20% of the frame so the image breathes inside the split-screen container.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic premium editorial healthcare photograph of a friendly veterinarian wearing clean navy blue medical scrubs with a stethoscope, gently examining a calm, happy golden retriever dog sitting on a modern veterinary examination table topped with a soft teal non-slip mat. Bright, spotless veterinary consultation room with soft mint and warm white walls. Soft natural daylight entering from a side window, eye-level camera angle, shallow depth of field, reassuring and compassionate atmosphere, colour palette of navy blue, medical blue, soft teal, and warm white, clean upper-left negative space, 8k resolution, natural skin and fur textures.
- **Negative Prompt:**
  > text, watermark, hospital name, logo, badge lettering, surgical blood, needles, distressed animal, cartoon, illustration, harsh fluorescent shadows, distorted hands, extra fingers, blurry subject.

---

### IMAGE 02: `dog-health-care.webp`
- **Image Number:** 02
- **Exact Filename:** `dog-health-care.webp`
- **Website Page:** `index.html` (Home) & `pet-care.html` (Pet Care)
- **Website Section:** Animals We Care For (Dogs Card) & Dog Health Section
- **Subject Description:** A healthy, alert medium-sized companion dog (beagle or labrador mix) sitting calmly on a padded veterinary consultation table during a routine wellness check.
- **Aspect Ratio:** `4:3` (responsive to `16:9` crop)
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Centered medium portrait of the dog with a veterinarian's gentle hands visible checking the dog's shoulder/coat.
- **Camera Angle:** Eye-level with the dog.
- **Lighting:** Soft diffused daylight, bright and welcoming clinical lighting.
- **Background:** Softly blurred modern veterinary examination room in warm white and soft mint tones.
- **Visual Style:** Clean commercial pet healthcare photography, natural and authentic.
- **Colour Palette:** Warm caramel and white fur, medical blue scrubs sleeve, soft mint (`#E8F5F1`), warm white (`#FAFCFB`).
- **Subject Positioning:** Dog positioned in the center with balanced headroom and side margins for flexible 4:3 and 16:9 framing.
- **Negative Space for Website Text:** Clean blurred background around the top and left edges.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic commercial veterinary photograph of a healthy, calm medium-sized companion dog sitting attentively on a padded teal veterinary examination mat while a veterinarian's hands in medical blue sleeves gently check the dog's coat. Bright, modern veterinary clinic room in the softly blurred background with warm white and soft mint tones. Eye-level shot, soft natural daylight, reassuring wellness mood, balanced margins for 4:3 and 16:9 framing, high detail fur texture, no text or logos.
- **Negative Prompt:**
  > text, watermark, logo, clinic signage, scared dog, muzzle, syringe, blood, dark lighting, oversaturated colours, cartoon style.

---

### IMAGE 03: `cat-health-care.webp`
- **Image Number:** 03
- **Exact Filename:** `cat-health-care.webp`
- **Website Page:** `index.html` (Home) & `pet-care.html` (Pet Care)
- **Website Section:** Animals We Care For (Cats Card) & Cat Health Section
- **Subject Description:** A relaxed domestic shorthair tabby cat resting comfortably on a soft pastel mint towel inside a quiet, feline-friendly veterinary consultation room.
- **Aspect Ratio:** `4:3` (responsive to `16:9` crop)
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Close-to-medium shot highlighting low-stress feline handling, with a veterinarian gently petting the cat's head.
- **Camera Angle:** Eye-level with the cat.
- **Lighting:** Warm, quiet, diffused natural light avoiding harsh reflections.
- **Background:** Calm, out-of-focus clinic room in muted navy, teal, and warm white tones.
- **Visual Style:** Serene, high-end veterinary editorial photography.
- **Colour Palette:** Silver-brown tabby coat, soft mint towel (`#E8F5F1`), navy blue sleeve (`#17324D`), warm white background.
- **Subject Positioning:** Cat centered on the soft towel, facing slightly left with calm eyes.
- **Negative Space for Website Text:** Smooth bokeh background in the upper third.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary healthcare photograph of a calm, relaxed domestic tabby cat resting comfortably on a folded soft mint towel on a consultation table. A veterinarian in navy blue scrubs gently strokes the cat's head using low-stress feline handling. Quiet, bright veterinary consultation room background with soft bokeh, eye-level camera angle, warm natural daylight, peaceful and reassuring mood, no text or logos.
- **Negative Prompt:**
  > hissed cat, arched back, cages, needles, surgical tools, text, watermark, logos, harsh shadows, neon colours.

---

### IMAGE 04: `bird-health-care.webp`
- **Image Number:** 04
- **Exact Filename:** `bird-health-care.webp`
- **Website Page:** `index.html` (Home) & `pet-care.html` (Pet Care)
- **Website Section:** Animals We Care For (Birds Card) & Bird Health Section
- **Subject Description:** A vibrant, healthy companion parakeet (budgerigar) perched calmly on a clean wooden tabletop perch during a gentle visual avian wellness observation.
- **Aspect Ratio:** `4:3` (responsive to `16:9` crop)
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium close-up with the bird in sharp focus on the perch and a veterinarian in the soft background observing gently.
- **Camera Angle:** Eye-level with the perched bird.
- **Lighting:** Bright, even daylight highlighting healthy feather texture.
- **Background:** Clean, airy consultation environment in soft white and teal hues.
- **Visual Style:** Crisp, natural companion animal photography.
- **Colour Palette:** Sky blue and white feathers, natural light wood perch, medical blue (`#3185C5`) and warm white (`#FAFCFB`) background.
- **Subject Positioning:** Parakeet positioned slightly left of center on the wooden stand, facing right.
- **Negative Space for Website Text:** Right third of the frame features soft out-of-focus clinical background.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary wellness photograph of a healthy blue and white companion parakeet perched calmly on a clean natural wooden tabletop stand inside a modern veterinary consultation room. A veterinarian in medical blue scrubs is softly blurred in the background observing the bird gently. Eye-level camera angle, soft natural daylight, crisp feather detail, calm and clean atmosphere, warm white and soft mint colour palette, no text or watermarks.
- **Negative Prompt:**
  > dirty cage bars, distressed bird, hands grabbing bird tightly, medical needles, text, logos, watermarks, artificial oversaturation.

---

### IMAGE 05: `small-pet-care.webp`
- **Image Number:** 05
- **Exact Filename:** `small-pet-care.webp`
- **Website Page:** `index.html` (Home) & `pet-care.html` (Pet Care)
- **Website Section:** Animals We Care For (Small Pets Card) & Small Pet Health Section
- **Subject Description:** A cute, healthy domestic rabbit sitting calmly on a soft teal padded mat on a veterinary examination table while a veterinarian gently supports its back.
- **Aspect Ratio:** `4:3` (responsive to `16:9` crop)
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium shot focusing on the rabbit's calm posture and gentle veterinary care.
- **Camera Angle:** Slightly above eye-level with the rabbit.
- **Lighting:** Soft, warm daylight creating a gentle, comforting aesthetic.
- **Background:** Clean, minimalist veterinary room in warm white and light grey.
- **Visual Style:** Professional companion animal healthcare photography.
- **Colour Palette:** Soft cream and brown rabbit fur, teal mat (`#35AFA3`), navy blue scrubs (`#17324D`), warm white (`#FAFCFB`).
- **Subject Positioning:** Centered composition with generous breathing room on all four sides.
- **Negative Space for Website Text:** Upper background area kept smooth and uncluttered.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary care photograph of a healthy domestic pet rabbit sitting calmly on a soft teal non-slip mat on a clean consultation table, with a veterinarian in navy scrubs gently resting a reassuring hand near the rabbit's shoulders. Bright, modern veterinary clinic interior with warm white walls and soft natural lighting, eye-level perspective, calm and compassionate mood, high detail fur texture, no text or logos.
- **Negative Prompt:**
  > laboratory cages, syringes, blood, frightened animal, text, watermark, hospital logo, harsh shadows, cartoon illustration.

---

### IMAGE 06: `demo-vet-profile-1.webp`
- **Image Number:** 06
- **Exact Filename:** `demo-vet-profile-1.webp`
- **Website Page:** `index.html` (Home) & `team.html` (Veterinary Team)
- **Website Section:** Meet the Veterinary Team — Card 1 (`Demo Veterinarian Profile` / `Dr. Sample Veterinarian`)
- **Subject Description:** Professional waist-up portrait of a friendly, approachable veterinary clinician wearing unbranded navy blue medical scrubs and a stethoscope around the neck, smiling warmly.
- **Aspect Ratio:** `4:5`
- **Recommended Resolution:** `1200 × 1500 px`
- **Orientation:** Portrait
- **Composition:** Classic vertical editorial head-and-shoulders portrait.
- **Camera Angle:** Eye-level, 85mm portrait lens perspective.
- **Lighting:** Soft key light from a window on the left with gentle fill light on the right.
- **Background:** Softly blurred modern veterinary clinic hallway with warm white walls and subtle teal accents.
- **Visual Style:** Authentic corporate medical portrait photography.
- **Colour Palette:** Navy blue (`#17324D`), soft mint (`#E8F5F1`), warm white (`#FAFCFB`), natural skin tones.
- **Subject Positioning:** Centered vertically with comfortable headroom.
- **Negative Space for Website Text:** Clean top 15% above the head for badge overlay clearance.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic professional portrait of a compassionate veterinary clinician in their 30s wearing clean, completely unbranded navy blue medical scrubs with a stethoscope draped around the neck, standing with a warm, reassuring smile in a bright modern veterinary hospital corridor. Soft natural daylight, 85mm portrait lens, shallow depth of field, warm white and soft mint background, no name tags, no embroidered text or logos, natural skin texture.
- **Negative Prompt:**
  > embroidered name tag, hospital logo, text on scrubs, badge text, watermark, overly airbrushed skin, harsh studio flash, distorted eyes.

---

### IMAGE 07: `demo-vet-profile-2.webp`
- **Image Number:** 07
- **Exact Filename:** `demo-vet-profile-2.webp`
- **Website Page:** `index.html` (Home) & `team.html` (Veterinary Team)
- **Website Section:** Meet the Veterinary Team — Card 2 (`Sample Veterinary Professional`)
- **Subject Description:** Professional vertical portrait of a confident, caring veterinary clinician wearing unbranded medical blue scrubs, holding a clean clipboard, smiling calmly.
- **Aspect Ratio:** `4:5`
- **Recommended Resolution:** `1200 × 1500 px`
- **Orientation:** Portrait
- **Composition:** Waist-up vertical portrait, slight three-quarter body turn toward the camera.
- **Camera Angle:** Eye-level, 85mm portrait lens.
- **Lighting:** Bright, balanced natural window light.
- **Background:** Out-of-focus consultation room with clean cabinetry and soft daylight.
- **Visual Style:** Modern healthcare team portrait photography.
- **Colour Palette:** Medical blue (`#3185C5`), light grey (`#F1F5F7`), warm white (`#FAFCFB`).
- **Subject Positioning:** Centered in the `4:5` frame with balanced shoulders and headroom.
- **Negative Space for Website Text:** Uncluttered upper background area.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic professional portrait of an approachable veterinary professional wearing solid, unbranded medical blue scrubs and a stethoscope, holding a plain silver clipboard in a bright, clean veterinary consultation room. Warm, trustworthy expression, eye-level 85mm lens portrait, soft natural daylight, shallow depth of field, warm white and light grey background, zero text, zero name badges, zero logos.
- **Negative Prompt:**
  > name badge, embroidered logo, text on clipboard, watermark, surgical mask covering face, dark shadows, cartoon look.

---

### IMAGE 08: `demo-vet-profile-3.webp`
- **Image Number:** 08
- **Exact Filename:** `demo-vet-profile-3.webp`
- **Website Page:** `index.html` (Home) & `team.html` (Veterinary Team)
- **Website Section:** Meet the Veterinary Team — Card 3 (`Illustrative Team Member`)
- **Subject Description:** Professional vertical portrait of a friendly veterinary nurse and client care coordinator wearing unbranded teal medical scrubs in a welcoming clinic reception area.
- **Aspect Ratio:** `4:5`
- **Recommended Resolution:** `1200 × 1500 px`
- **Orientation:** Portrait
- **Composition:** Head-and-shoulders vertical portrait.
- **Camera Angle:** Eye-level.
- **Lighting:** Soft, inviting natural daylight with warm indoor fill.
- **Background:** Blurred modern veterinary clinic reception space with indoor greenery and warm white tones.
- **Visual Style:** Clean, friendly healthcare portrait photography.
- **Colour Palette:** Teal (`#35AFA3`), soft mint (`#E8F5F1`), navy accents (`#17324D`), warm white.
- **Subject Positioning:** Centered with open, welcoming posture.
- **Negative Space for Website Text:** Top 15% soft bokeh background.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic vertical portrait of a friendly veterinary nurse and client support coordinator wearing solid, unbranded teal medical scrubs, smiling warmly in a bright, modern veterinary clinic reception area. Soft natural daylight, 85mm portrait lens, shallow depth of field with subtle indoor plants and warm white walls in the blurred background, compassionate and welcoming demeanour, no name tags, no text, no logos.
- **Negative Prompt:**
  > printed text, clinic signage, name badge, embroidered lettering, watermark, harsh shadows, unnatural facial features.

---

### IMAGE 09: `about-veterinary-clinic.webp`
- **Image Number:** 09
- **Exact Filename:** `about-veterinary-clinic.webp`
- **Website Page:** `about.html` (About the Hospital)
- **Website Section:** Introduction to Veterinary Healthcare
- **Subject Description:** Wide interior architectural photograph of a calm, modern, spotless veterinary hospital reception and consultation waiting area designed for pet comfort.
- **Aspect Ratio:** `16:10`
- **Recommended Resolution:** `1920 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Symmetrical wide-angle interior view showing clean seating areas separated for dogs and cats, natural wood accents, and soft medical blue and teal design elements.
- **Camera Angle:** Eye-level architectural interior perspective.
- **Lighting:** Abundant natural daylight through large windows combined with warm recessed ceiling lights.
- **Background:** Clean reception desk (with no wall lettering or signage) and frosted glass consultation doors.
- **Visual Style:** Premium healthcare architectural photography, airy, calming, and reassuring.
- **Colour Palette:** Warm white (`#FAFCFB`), soft mint (`#E8F5F1`), medical blue (`#3185C5`), navy (`#17324D`), natural oak wood.
- **Subject Positioning:** Balanced interior perspective leading the eye toward the bright consultation corridor.
- **Negative Space for Website Text:** Clean ceiling and wall planes on the left and top.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic architectural interior photograph of a modern, calm, and spotless veterinary hospital reception and waiting lounge. Features warm white and soft mint walls, natural light oak wood accents, comfortable seating with spacious separation for pets, and subtle navy and teal design touches. Flooded with soft natural daylight from floor-to-ceiling windows, clean minimalist reception desk with zero wall text or logos, reassuring and hygienic medical environment, 8k resolution.
- **Negative Prompt:**
  > wall lettering, hospital name sign, posters with text, crowded waiting room, cages, clutter, dark corridors, watermark.

---

### IMAGE 10: `compassionate-pet-handling.webp`
- **Image Number:** 10
- **Exact Filename:** `compassionate-pet-handling.webp`
- **Website Page:** `about.html` (About the Hospital)
- **Website Section:** Preventive Care & Open Dialogue Section
- **Subject Description:** A veterinarian in navy scrubs speaking warmly with a pet owner while both gently comfort a calm medium-sized dog on a consultation table.
- **Aspect Ratio:** `16:10`
- **Recommended Resolution:** `1920 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium-wide two-person plus pet interaction shot emphasizing clear communication and trust.
- **Camera Angle:** Eye-level.
- **Lighting:** Soft natural daylight creating a warm, open atmosphere.
- **Background:** Modern, uncluttered veterinary consultation room in warm white and light grey.
- **Visual Style:** Documentary-style healthcare photography, authentic human-animal bond.
- **Colour Palette:** Navy (`#17324D`), medical blue (`#3185C5`), soft mint (`#E8F5F1`), warm casual clothing tones on the pet owner.
- **Subject Positioning:** Veterinarian on the left, dog in the center, pet owner on the right listening attentively.
- **Negative Space for Website Text:** Upper background wall kept clean and free of charts or text.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic editorial photograph of a compassionate veterinarian in unbranded navy blue scrubs having a clear, friendly conversation with a smiling pet owner while gently petting a calm dog sitting between them on a clean veterinary consultation table. Bright, modern consultation room with warm white walls and soft natural window light, eye-level perspective, authentic trust and communication, no text, no wall posters, no logos.
- **Negative Prompt:**
  > wall charts with text, hospital logos, name tags, distressed pet, medical needles, harsh lighting, watermark, distorted hands.

---

### IMAGE 11: `veterinary-consultation.webp`
- **Image Number:** 11
- **Exact Filename:** `veterinary-consultation.webp`
- **Website Page:** `services.html` (Veterinary Services)
- **Website Section:** Service 01 — General Veterinary Consultation
- **Subject Description:** A veterinarian using a stethoscope to gently listen to the heart and lungs of a calm labrador dog during a routine physical health assessment.
- **Aspect Ratio:** `4:3`
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium close-up focusing on the stethoscope examination and the dog's relaxed expression.
- **Camera Angle:** Eye-level.
- **Lighting:** Bright, soft clinical daylight.
- **Background:** Clean consultation room in soft mint and warm white tones.
- **Visual Style:** Crisp, reassuring medical photography.
- **Colour Palette:** Medical blue scrubs (`#3185C5`), navy accents (`#17324D`), warm yellow labrador coat, warm white background.
- **Subject Positioning:** Dog on the left-center, veterinarian on the right leaning in gently with the stethoscope.
- **Negative Space for Website Text:** Soft out-of-focus upper-left background.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary photograph of a veterinarian in unbranded medical blue scrubs gently placing a stethoscope on the chest of a calm, healthy yellow labrador dog sitting on a clean examination table. Bright, modern veterinary consultation room with soft mint and warm white walls, natural daylight, shallow depth of field, reassuring and professional clinical atmosphere, no text or logos.
- **Negative Prompt:**
  > text, watermark, embroidered logos, needles, surgical instruments, anxious dog, dark shadows.

---

### IMAGE 12: `pet-vaccination.webp`
- **Image Number:** 12
- **Exact Filename:** `pet-vaccination.webp`
- **Website Page:** `services.html` (Veterinary Services)
- **Website Section:** Service 02 — Vaccination & Preventive Care
- **Subject Description:** A veterinarian and veterinary nurse gently comforting and examining a young puppy on a soft teal mat during a preventive wellness and vaccination consultation (focus on gentle reassurance rather...
- **Aspect Ratio:** `4:3`
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium shot centered on the puppy receiving gentle attention and a wellness check.
- **Camera Angle:** Eye-level with the puppy.
- **Lighting:** Soft, warm natural light.
- **Background:** Clean, bright veterinary room in warm white and soft mint.
- **Visual Style:** Warm, reassuring preventive pet care photography.
- **Colour Palette:** Soft teal (`#35AFA3`), navy (`#17324D`), warm puppy fur, warm white (`#FAFCFB`).
- **Subject Positioning:** Puppy centered on a soft teal pad, cradled gently by the veterinarian's hands.
- **Negative Space for Website Text:** Clean blurred background in the top third.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary preventive care photograph of a veterinarian in unbranded navy scrubs gently examining and comforting an adorable, calm young puppy sitting on a soft teal mat in a bright consultation room. Focus on gentle handling, wellness check, and reassurance without visible sharp needles. Soft natural daylight, eye-level perspective, warm white and soft mint clinical background, no text or watermarks.
- **Negative Prompt:**
  > large syringe needle piercing skin, crying puppy, blood, text on vials, logos, watermarks, harsh lighting.

---

### IMAGE 13: `pet-diagnostics.webp`
- **Image Number:** 13
- **Exact Filename:** `pet-diagnostics.webp`
- **Website Page:** `services.html` (Veterinary Services)
- **Website Section:** Service 03 — Diagnostics & Laboratory Services
- **Subject Description:** A veterinary professional in clean medical blue scrubs reviewing clinical notes beside a tidy, modern laboratory bench with a standard optical microscope in a bright veterinary clinic workspace.
- **Aspect Ratio:** `4:3`
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium shot showing the clinician in profile/three-quarter view at a clean diagnostic counter.
- **Camera Angle:** Eye-level.
- **Lighting:** Crisp, clean daylight-balanced clinical lighting.
- **Background:** Organized, spotless veterinary diagnostic room in light grey and warm white tones.
- **Visual Style:** Clean modern medical science photography.
- **Colour Palette:** Medical blue (`#3185C5`), navy (`#17324D`), light grey (`#F1F5F7`), warm white (`#FAFCFB`).
- **Subject Positioning:** Clinician positioned on the right, clean laboratory desk and microscope on the left.
- **Negative Space for Website Text:** Upper-left background wall kept clean and uncluttered.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary diagnostic workspace photograph showing a veterinary professional in unbranded medical blue scrubs reviewing clinical pathology notes at a spotless, modern white laboratory counter with a clean optical microscope. Bright, organized veterinary diagnostic room in warm white and light grey tones, soft natural daylight, professional and hygienic atmosphere, no brand logos, no text on equipment, no watermarks.
- **Negative Prompt:**
  > brand names on equipment, messy lab tubes, blood splatters, text overlays, watermarks, dark moody lighting.

---

### IMAGE 14: `veterinary-surgery.webp`
- **Image Number:** 14
- **Exact Filename:** `veterinary-surgery.webp`
- **Website Page:** `services.html` (Veterinary Services)
- **Website Section:** Service 04 — Veterinary Surgery
- **Subject Description:** A clean, calm, modern veterinary surgical preparation and preoperative consultation room featuring sterile stainless surfaces, soft teal surgical drapes, and two veterinary professionals reviewing a preoperative checklist (no graphic surgical procedures shown).
- **Aspect Ratio:** `4:3`
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium-wide shot emphasizing hygiene, preparation, and responsible teamwork.
- **Camera Angle:** Eye-level.
- **Lighting:** Bright, even, hygienic clinical lighting.
- **Background:** Frosted glass partition and spotless teal and white clinical walls.
- **Visual Style:** Reassuring, high-standard medical facility photography.
- **Colour Palette:** Teal (`#35AFA3`), medical blue (`#3185C5`), navy (`#17324D`), sterile white (`#FFFFFF`).
- **Subject Positioning:** Two veterinary clinicians in teal surgical scrubs and caps standing near the center-right reviewing a preoperative clipboard.
- **Negative Space for Website Text:** Clean frosted glass and wall area on the left side.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic photograph of a spotless, modern veterinary preoperative preparation room. Two veterinary professionals wearing clean, unbranded teal surgical scrubs and caps calmly review a preoperative checklist on a clipboard. Bright, hygienic environment with frosted glass walls, warm white and soft mint surfaces, reassuring and professional medical atmosphere, no graphic surgery, no blood, no text or logos.
- **Negative Prompt:**
  > open surgery, blood, incisions, graphic medical procedures, distressed animals, text, logos, watermarks, dark shadows.

---

### IMAGE 15: `pet-dental-care.webp`
- **Image Number:** 15
- **Exact Filename:** `pet-dental-care.webp`
- **Website Page:** `services.html` (Veterinary Services)
- **Website Section:** Service 05 — Dental Care
- **Subject Description:** A veterinarian wearing clean medical examination gloves gently lifting the lip of a calm, cooperative dog to visually inspect its clean teeth and healthy gums during a routine oral wellness check.
- **Aspect Ratio:** `4:3`
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Close-to-medium shot focusing on the gentle oral health inspection.
- **Camera Angle:** Eye-level with the dog's head.
- **Lighting:** Bright, soft natural light illuminating the dog's face clearly.
- **Background:** Softly blurred veterinary consultation room in warm white and soft mint.
- **Visual Style:** Educational, gentle veterinary care photography.
- **Colour Palette:** Medical blue (`#3185C5`), soft nitrile glove blue, warm dog fur, warm white (`#FAFCFB`).
- **Subject Positioning:** Dog's head in the center, veterinarian's hands and smiling face on the right.
- **Negative Space for Website Text:** Blurred left margin of the frame.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic veterinary dental consultation photograph showing a veterinarian in unbranded medical blue scrubs and clean examination gloves gently inspecting the clean teeth and healthy gums of a calm, cooperative golden-coated dog on a consultation table. Bright, welcoming clinic room with soft natural daylight, shallow depth of field, gentle and stress-free atmosphere, no sharp dental hooks, no blood, no text or watermarks.
- **Negative Prompt:**
  > sharp metal dental scrapers, blood, sedation tubes, aggressive dog, text, watermark, logos, harsh flash.

---

### IMAGE 16: `pet-wellness.webp`
- **Image Number:** 16
- **Exact Filename:** `pet-wellness.webp`
- **Website Page:** `services.html` (Veterinary Services)
- **Website Section:** Service 06 — Grooming & Wellness
- **Subject Description:** A veterinary wellness attendant in clean teal scrubs gently brushing the healthy, shiny coat of a relaxed small companion dog on a padded grooming and wellness table.
- **Aspect Ratio:** `4:3`
- **Recommended Resolution:** `1600 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Medium shot highlighting coat care, skin wellness, and a happy, comfortable pet.
- **Camera Angle:** Eye-level.
- **Lighting:** Soft, airy natural daylight.
- **Background:** Spotless, modern pet wellness and grooming room in soft mint and warm white.
- **Visual Style:** Clean, comforting pet wellness photography.
- **Colour Palette:** Teal (`#35AFA3`), soft mint (`#E8F5F1`), warm white (`#FAFCFB`), cream/white dog coat.
- **Subject Positioning:** Dog centered on the table enjoying the gentle brushing; attendant on the left.
- **Negative Space for Website Text:** Clean soft-mint wall area in the upper right.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic pet wellness photograph of a caring veterinary assistant in unbranded teal scrubs gently brushing the clean, fluffy coat of a relaxed small companion dog on a padded wellness table. Bright, spotless clinic grooming and wellness room with soft mint and warm white walls, natural window light, calm and comforting atmosphere, high detail fur texture, no text or logos.
- **Negative Prompt:**
  > wet messy floor, loud clippers, soap suds covering eyes, distressed dog, text, logos, watermark.

---

### IMAGE 17: `veterinary-team.webp`
- **Image Number:** 17
- **Exact Filename:** `veterinary-team.webp`
- **Website Page:** `team.html` (Veterinary Team)
- **Website Section:** Collaborative Veterinary Care Overview
- **Subject Description:** A group portrait of three collaborative veterinary professionals (two veterinarians and a veterinary nurse) in unbranded navy, medical blue, and teal scrubs standing together warmly in a bright veterinary hospital consultation area, with one member holding a calm small dog.
- **Aspect Ratio:** `16:10`
- **Recommended Resolution:** `1920 × 1200 px`
- **Orientation:** Landscape
- **Composition:** Balanced medium-wide group portrait showing teamwork and warmth.
- **Camera Angle:** Eye-level.
- **Lighting:** Soft, even natural daylight from large clinic windows.
- **Background:** Modern, airy veterinary hospital interior in warm white and soft mint.
- **Visual Style:** Premium healthcare team editorial photography.
- **Colour Palette:** Navy (`#17324D`), medical blue (`#3185C5`), teal (`#35AFA3`), soft mint (`#E8F5F1`), warm white (`#FAFCFB`).
- **Subject Positioning:** Three team members centered harmoniously with comfortable spacing around the edges.
- **Negative Space for Website Text:** Clean upper background margin.
- **Complete Google Flow Image-Generation Prompt:**
  > Photorealistic editorial group portrait of three diverse, friendly veterinary professionals wearing solid, completely unbranded navy blue, medical blue, and teal scrubs, standing together with warm smiles in a bright, modern veterinary hospital corridor while one gently holds a calm small companion dog. Soft natural daylight, eye-level perspective, shallow depth of field, warm white and soft mint background, zero name badges, zero embroidered logos, zero text.
- **Negative Prompt:**
  > name tags, embroidered clinic names, wall signage, text, watermarks, stiff poses, harsh shadows, distorted faces.

---

## 6. INSTRUCTIONS FOR REPLACING PLACEHOLDERS WITH GENERATED IMAGES

Once you have generated the `.webp` images using the Google Flow prompts above, follow these steps to replace the HTML placeholders:

1. **Create an `images/` folder** in the root directory of the project:
   ```text
   Pet Hospital/
   ├── images/
   │   ├── pet-hospital-hero.webp
   │   ├── dog-health-care.webp
   │   └── ... (all 17 .webp files)
   ```
2. **Locate each `.img-placeholder` block** in the HTML files (`index.html`, `about.html`, `services.html`, `team.html`, `pet-care.html`) by searching for its `<span class="placeholder-filename">filename.webp</span>`.
3. **Replace the inner placeholder badge markup** with a standard responsive `<img>` element while preserving the aspect-ratio wrapper class, or use this clean replacement pattern:
   ```html
   <!-- Before (Placeholder) -->
   <div class="img-placeholder ratio-16-10" role="img" aria-label="Descriptive alt text">
     ...
     <span class="placeholder-filename">pet-hospital-hero.webp</span>
   </div>

   <!-- After (Generated WebP Image) -->
   <div class="img-placeholder ratio-16-10" style="padding:0; border:none;">
     <img
       src="images/pet-hospital-hero.webp"
       alt="Veterinarian gently examining a golden retriever dog in a clean consultation room"
       loading="lazy"
       style="width:100%; height:100%; object-fit:cover; border-radius:inherit;"
     />
   </div>
   ```
4. **Verify alt text and aspect ratios:** Because the `.ratio-*` utility classes (`ratio-16-10`, `ratio-4-3`, `ratio-16-9`, `ratio-4-5`) lock the container dimensions, replacing the placeholder with `object-fit: cover` guarantees zero layout shift (CLS = 0) across desktop, tablet, and mobile viewports.
