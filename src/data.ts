import { Product, BlogArticle, Testimonial, FAQItem, TimelineEvent, CoreValue } from './types';

export const CATEGORIES = [
  {
    id: 'dumbbells-weights',
    name: 'Dumbbells & Weights',
    description: 'Build strength with durable dumbbells, kettlebells, and weight plates.',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600'
  },
  {
    id: 'resistance-training',
    name: 'Resistance Training',
    description: 'Premium resistance bands and strength training accessories.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=600'
  },
  {
    id: 'cardio-equipment',
    name: 'Cardio Equips',
    description: 'Treadmills, exercise bikes, jump ropes, and more.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600'
  },
  {
    id: 'recovery-gear',
    name: 'Recovery Gear',
    description: 'Foam rollers, massage balls, and stretching tools.',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'adjustable-dumbbell',
    name: 'Adjustable Dumbbell Set',
    price: 129.99,
    category: 'Dumbbells & Weights',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=800',
    description: 'Space-saving adjustable dumbbells with weight options from 5–50 lbs. Perfect for home gym setups, their smooth selector dial allows you to change resistance levels in seconds.',
    features: [
      'Quick weight adjustment',
      'Durable steel construction',
      'Ergonomic grip'
    ],
    isFeatured: true
  },
  {
    id: 'resistance-band-kit',
    name: 'Resistance Band Kit',
    price: 29.99,
    category: 'Resistance Training',
    image: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=800',
    description: 'Complete resistance training kit for home and gym workouts. Includes heavy-duty stackable tube bands, handles, ankle straps, and door anchors for complete body conditioning.',
    features: [
      '5 resistance levels',
      'Door anchor included',
      'Portable carrying bag'
    ],
    isFeatured: true
  },
  {
    id: 'yoga-mat-premium',
    name: 'Premium Yoga Mat',
    price: 39.99,
    category: 'Recovery Gear',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800',
    description: 'Non-slip yoga mat designed for comfort and stability. Crafted from high-density eco-friendly TPE materials to provide exceptional padding for joints during strenuous sequences.',
    features: [
      'Eco-friendly material',
      'Sweat-resistant surface',
      '6mm thickness'
    ],
    isFeatured: true
  },
  {
    id: 'foam-roller-pro',
    name: 'Foam Roller Pro',
    price: 24.99,
    category: 'Recovery Gear',
    image: 'https://images.unsplash.com/photo-1616724855423-95f7004f1418?q=80&w=800',
    description: 'Deep tissue massage roller for muscle recovery. Features dual-grid target zones to trigger point release core tension, improve blood flow, and enhance muscular range of motion.',
    features: [
      'High-density foam',
      'Lightweight design',
      'Durable construction'
    ],
    isFeatured: true
  },
  {
    id: 'smart-jump-rope',
    name: 'Smart Jump Rope',
    price: 19.99,
    category: 'Cardio Equips',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=800',
    description: 'Digital jump rope with workout tracking features. Connects with modern fitness metrics to help you gauge jumps, speed, elapsed training duration, and active calories burned.',
    features: [
      'LCD display',
      'Calorie counter',
      'Adjustable length'
    ],
    isFeatured: false
  },
  {
    id: 'kettlebell-set',
    name: 'Kettlebell Set',
    price: 89.99,
    category: 'Dumbbells & Weights',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800',
    description: 'Versatile powder-coated iron kettlebells for robust strength and conditioning workouts. Specially textured wide handles offer an exceptional two-handed grip during active swings.',
    features: [
      'Powder-coated finish',
      'Comfortable grip',
      'Multiple weight options'
    ],
    isFeatured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    rating: 5,
    quote: "Fitzee helped me build my home gym with high-quality equipment at great prices.",
    author: "Sarah Johnson",
    role: "Certified Yoga Instructor"
  },
  {
    id: 't2',
    rating: 5,
    quote: "Excellent customer service and fast delivery. The adjustable dumbbells feel incredibly solid and save a ton of space in my living room.",
    author: "Michael Brown",
    role: "Amateur Weightlifter"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to selected countries worldwide. Shipping fees and delivery timestamps are computed automatically at the checkout stage based on your localized zip code.'
  },
  {
    id: 'faq2',
    question: 'What is your return policy?',
    answer: 'Returns are accepted within 30 days of purchase. The items must be returned in their original packaging, showing absolutely no structural damage, along with proof of receipt.'
  },
  {
    id: 'faq3',
    question: 'How can I track my order?',
    answer: 'Tracking details, including carrier links and tracking identification numbers, are dispatched automatically via automated email as soon as your physical package departs our fulfillment warehouses.'
  },
  {
    id: 'faq4',
    question: 'Do products come with warranties?',
    answer: 'Most individual gym hardware and smart electronics include a full 1-year manufacturer warranty, which protects against structural defects, mechanisms breakdown, and performance damage under regular usage limits.'
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2019', title: 'Fitzee Founded', description: 'Fitzee was established by premium design engineers and trainers focusing on high-durability fitness components.' },
  { year: '2020', title: 'First Fitness Collection', description: 'Successfully debuted the premium resistance bands, mobility elements, and ergonomic accessories.' },
  { year: '2022', title: 'Home Gym Hardware', description: 'Expanded heavily into professional-grade dumbbells, kettlebells, and heavy-duty strength equipment.' },
  { year: '2024', title: '50,000+ Customers Worldwide', description: 'Grew a global passionate audience of fitness athletes and trainers seeking elite-class conditioning gear.' },
  { year: '2025', title: 'Eco-Friendly Fitness Products', description: 'Launched a new line of non-toxic, bio-degradable yoga apparatus, and recycled high-performance plastics.' }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Quality',
    description: 'We source and manufacture products built to last. All materials are subjected under dynamic friction and endurance tests.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Innovation',
    description: 'We continuously improve our product lineup, implementing ergonomic designs, hybrid configurations, and responsive smart features.',
    iconName: 'Sparkles'
  },
  {
    title: 'Community',
    description: 'We support fitness enthusiasts at every level—from home gym newcomers to competing professional weightlifters.',
    iconName: 'Users'
  },
  {
    title: 'Integrity',
    description: 'We operate with ultimate honesty and transparency, backing every batch of gym equipment with clear warranties and live client support.',
    iconName: 'Scale'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    title: 'Top 10 Home Workout Essentials',
    publishDate: 'January 15, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    excerpt: 'Creating an effective home gym starts with selecting versatile equipment. Discover the top essentials every fitness enthusiast should own.',
    content: `Creating an effective home gym doesn't require a commercial-sized warehouse or thousands of dollars in high-tech machinery. The real secret to sustainable, progressive home conditioning lies in selecting **versatile, space-efficient, and multi-functional** hardware.

By focusing on pieces that can target multiple muscle groups and scale as you grow stronger, you maximize both your budget and your physical floor space.

Here are the critical cornerstones of a world-class home workout studio:

### 1. Space-Saving Adjustable Dumbbells
Instead of buying ten separate pairs of dumbbells that clutter your floor, a single adjustable set provides a complete range (typically 5 to 50 lbs) in the footprint of only two gym weights. This enables you to seamlessly switch weights between exercises like heavy chest presses and lighter shoulder lateral raises.

### 2. High-Density Yoga or Exercise Mats
Never underestimate the importance of joint protection and traction. A premium, non-slip 6mm mat shields your spine and knees from hard wood or concrete flooring and prevents sliding during sweaty, high-intensity intervals.

### 3. Stackable Resistance Bands
Perfect for progressive resistance, band systems allow you to overload muscles at different range limits. They are incredibly lightweight, take up almost zero cabinet space, and are ideal for glute activation, rowing movements, and active physical therapy.

### 4. Dynamic Kettlebells
Kettlebells are the ultimate tool for merging strength and cardiovascular endurance. The off-center center-of-gravity triggers stabilizer muscles, perfecting your core strength during dynamic swings, snatches, and goblet squads.

### 5. Smart Jump Ropes
Cardio conditioning is indispensable. Fast, responsive jump ropes provide a highly taxing caloric burn in a compact area. Modern smart jump ropes can automatically sync jump counts and heart-rate intervals back to your digital metrics.

### Conclusion
Investing in your fitness journey starts small. By prioritizing these versatile essentials, you install a private sanctuary that keeps you disciplined, powerful, and fit on your own terms. Try starting with one or two key pieces, like an adjustable dumbbell set or a resistance kit, and build your temple brick by brick!`
  },
  {
    id: 'b2',
    title: 'Benefits of Resistance Training',
    publishDate: 'February 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800',
    excerpt: 'Resistance training improves muscle strength, bone health, and overall fitness. Learn why it is important for all age groups.',
    content: `Many people associate resistance training strictly with bodybuilders lifting massive iron plates in dim cellars. However, resistance training—whether utilizing external weights, resistance elastomeric bands, or your own body weight—is one of the most powerful interventions we have for **longevity, metabolic vitality, and life design**.

As we progress through different ages, our bodies undergo continuous structural changes. Resistance training serves as the primary mechanical signal to keep our muscles resilient, bones dense, and joints stabilized.

### Why You Need Resistance Training Today:

* **Skeletal Muscle Preservation (Sarcopenia Defense):** Beginning in our 30s, adults naturally lose up to 3% to 5% of muscle mass per decade. Resistance training reverses this decline, ensuring we retain structural power and biological independence.
* **Bone Mineral Density Development:** Mechanical tension pulls on bones, stimulating osteoblasts to lay down new bone matrix. This makes resistance training a crucial shield against osteopenia and osteoporosis in post-menopausal women and aging men.
* **Advanced Insulin Sensitivity & Glucose Control:** Muscles are our primary clearance sink for blood sugars. Active strength training increases GLUT4 receptor channels, making your body significantly more efficient at handling nutrients and lowering risk of systemic metabolic disorders.
* **Neuromuscular Coordination and Joint Safety:** Strengthening the stabilizing ligaments, tendons, and muscles surrounding major junctions (like knees, lower spine, and shoulders) prevents active slips, falls, and chronic pain.

### Getting Started is Easy
You do not need to lift massive loads out of the gate. Starting with low-impact resistance band exercises, bodyweight squats, and light dumbbells twice per week is more than enough to trigger systemic biological benefits. Focus on pristine form, steady progression, and recovery!`
  },
  {
    id: 'b3',
    title: 'How to Choose the Right Dumbbells',
    publishDate: 'March 5, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=800',
    excerpt: 'Selecting the proper weight can significantly impact your training progress. Here is how to choose wisely.',
    content: `Dumbbells are arguably the most iconic, reliable, and foundational fitness tool in human history. They allow for unilateral training (working each side of the body independently), which fixes strength imbalances and builds superb core stabilizers.

However, entering the market, you are met with Hex dumbbells, rubber-coated dumbbells, chrome accessories, spinlock setups, and highly engineered dial-selector dumbbells. How do you choose the right fit for your specific lifestyle and training goals?

### 1. Analyze Your Workout Space
If you are working with a dedicated garage gym or spare bedroom, buying a full rack of traditional Cast Iron or Rubber Hex dumbbells can be incredibly satisfying. However, if you are working out in a communal living area or bedroom, space is at a premium. This is where an **Adjustable Dumbbell Set** shines—providing the utility of an entire rack of dumbbells inside a single sleek storage tray.

### 2. Determine Your Strength Spectrum
To make progress via progressive overload, you need various weights.
* **Light Weight Spectrum (5–15 lbs):** Best for fine-tuning dynamic stabilizers, rear-deltoids, lateral raises, and doing high-repetition aerobic conditioning.
* **Moderate Weight Spectrum (15–35 lbs):** Excellent for compound upper-body mechanics such as dumbbell shoulder presses, bicep curls, and single-arm bent-over rows.
* **Heavy Weight Spectrum (35–50+ lbs):** Essential for overloading largest muscle complexes like Goblet squats, deadlifts, and heavy chest floor-presses.

Ideally, your setup should cover all three. An adjustable dialing system facilitates this progression with unmatched convenience.

### 3. Material Matters: Rubber vs. Steel vs. Iron
* **Rubber-Coated Hex:** Excellent for protecting hardwood floors and reducing noise during drops, although they can sometimes carry a distinct industrial smell initially.
* **Cast Iron / Steel:** Absolute classics, providing a compact footprint and unmatched tactile sound, though they require a bit of care to prevent rusting in high-humidity areas.
* **Selectorized Core:** Multi-part complex alloys. They save immense space but should not be aggressively thrown to the floor to protect their internal selection mechanisms.`
  },
  {
    id: 'b4',
    title: 'Recovery Tips After Intense Workouts',
    publishDate: 'April 8, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=800',
    excerpt: 'Recovery is just as important as training. Explore effective recovery techniques to reduce soreness and improve performance.',
    content: `We have all heard the fitness quote, "No pain, no gain." But scientifically, you do not build muscle or gain endurance during your workouts.

Workouts are actually catabolic—they create microscopic tears in your muscle fibers, deplete cellular glycogen stores, and place strain on your nervous system. You actually get stronger during **recovery**, when your body synthesizes new structural proteins to rebuild those fibers bigger and more resilient.

If you train hard without equal recovery protocol, you hit performance plateaus, trigger injuries, and experience persistent muscle soreness (DOMS).

### The Golden Columns of Muscle Recovery:

1. **Strategic Myofascial Release (Foam Rolling):** Foam rolling helps break up tight myofascial adhesions, bringing oxygenated blood flow directly to damaged muscle fibrils. Spending 5 to 10 minutes rolling out major muscle structures (quadriceps, calves, upper back) significantly cuts down sore recovery hours.
2. **The 30-Minute Post-Workout Glycogen Window:** After training, your body is primed to absorb nutrients. Consuming a 3:1 ratio of fast carbohydrates to high-quality proteins within 30-45 minutes replenishment window triggers rapid muscle repair and replenishes muscle glycogen energy.
3. **Deep, Uninterrupted Sleep (7-9 Hours):** Sleep is your natural anabolic chamber. During slow-wave deep sleep states, your pituitary gland secretes massive surges of human growth hormone (HGH), which is directly responsible for deep cellular tissue repair and recovery.
4. **Active Mobilization Mat Sessions:** On rest days, do not remain completely sedentary. Spend 15 minutes doing gentle stretching on a premium yoga mat, or going for a light walk. This active mobility flushes metabolic breakdown toxins out of muscle groupings and restores flexibility.

Make recovery a non-negotiable part of your weekly workout calendar. Your body will thank you by shattering personal records next week!`
  },
  {
    id: 'b5',
    title: "Beginner's Guide to Home Fitness",
    publishDate: 'May 20, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800',
    excerpt: 'Starting your fitness journey? Follow these simple tips to build healthy workout habits from day one.',
    content: `Deciding to start a fitness journey is one of the most rewarding commitments you will ever make for your health. However, the sheer volume of online routines, extreme diets, and complicated equipment guides can quickly leave beginners feeling paralyzed and overwhelmed.

The golden rule for beginners is **consistency over intensity**. A moderate, simple workout done three times a week for a year is infinitely more powerful than an elite, brutal training regimen that you abandon after two weeks.

Let's break down the ultimate beginners handbook to starting smart and remaining consistent.

### Step 1: Define a Minimalist Workout Zone
You do not need to convert your entire basement into a commercial gym. Select a quiet 6x6 foot area, lay down a comfortable high-durability mat, and keep your basic tools organized there. Having a designated, visual workspace acts as a powerful psychological trigger that gets you in the zone.

### Step 2: Master Basic Human Movements
Fitness can be simplified into five primary movement patterns. Learn these with light weights or bodyweight first:
* **The Squat:** Sitting back into a chair (goblet squats, bodyweight squats).
* **The Hinge:** Folding forward at the hips to liftoff (deadlifts, kettlebell swings).
* **The Push:** Pushing weight away from your torso (push-ups, dumbbell chest presses).
* **The Pull:** Pulling resistance in toward your body (dumbbell single-arm rows, band pulls).
* **The Carry:** Walking with heavy loads at your side to build core stability (farmers carries).

### Step 3: Schedule Workouts Like Important Appointments
Never leave your workout timing to chance. If you wait until you "feel motivated" or "have free time," you will rarely check the box. Block out 30 minutes on Monday, Wednesday, and Friday morning or evening. Protect that time block fiercely.

### Step 4: Focus on Progressive Load
Every week, aim to make one tiny improvement. This could mean lifting 2 lbs heavier, doing one more repetition with perfect posture, or taking 15 seconds less rest between sets. These microscopic micro-wins compound over a year into absolute physical transformations.`
  }
];
