export interface Exercise {
  id: string;
  name: string;
  description: string;
  duration: string; // "30 seconds" or "10 reps" etc.
  image: string;
  tips: string[];
  modifications: {
    easier: string;
    harder: string;
  };
}

export interface WorkoutPlan {
  day: number;
  title: string;
  focus: string;
  duration: string;
  intensity: string;
  description: string;
  warmup: Exercise[];
  mainWorkout: Exercise[];
  cooldown: Exercise[];
}

export const workoutPlans: WorkoutPlan[] = [
  // Day 1: Full Body
  {
    day: 1,
    title: "Full Body Strength",
    focus: "All Major Muscle Groups",
    duration: "35-40 min",
    intensity: "Moderate",
    description: "A gentle full body workout focusing on building strength in all major muscle groups without stressing your joints.",
    warmup: [
      {
        id: "wu-1-1",
        name: "Gentle Marching",
        description: "March in place, lifting knees to a comfortable height. Focus on controlled movements and steady breathing.",
        duration: "1 minute",
        image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep your posture tall", "Engage your core lightly"],
        modifications: {
          easier: "March slower and lower",
          harder: "Lift knees higher and add arm movements"
        }
      },
      {
        id: "wu-1-2",
        name: "Shoulder Rolls",
        description: "Roll shoulders backward in circular motions, then forward.",
        duration: "30 seconds each direction",
        image: "https://images.pexels.com/photos/7991661/pexels-photo-7991661.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep breathing steady", "Feel the tension release"],
        modifications: {
          easier: "Smaller circles",
          harder: "Larger circles with more focus on posture"
        }
      },
      {
        id: "wu-1-3",
        name: "Gentle Side Bends",
        description: "Stand with feet shoulder-width apart, bend to one side reaching arm over head, then switch.",
        duration: "30 seconds each side",
        image: "https://images.pexels.com/photos/6957889/pexels-photo-6957889.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Don't lean forward or backward", "Keep both feet grounded"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Hold at the end position for 2-3 seconds"
        }
      }
    ],
    mainWorkout: [
      {
        id: "mw-1-1",
        name: "Wall Push-ups",
        description: "Stand facing a wall at arm's length. Place hands on wall at shoulder height and width. Bend elbows to bring chest toward wall, then push back.",
        duration: "10-12 reps, 2 sets",
        image: "https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep body in a straight line", "Don't lock elbows at the end"],
        modifications: {
          easier: "Stand closer to the wall",
          harder: "Stand further from the wall or elevate one foot"
        }
      },
      {
        id: "mw-1-2",
        name: "Seated Rows",
        description: "Sit on chair edge, extend arms forward. Bend elbows and pull back, squeezing shoulder blades together.",
        duration: "12-15 reps, 2 sets",
        image: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep shoulders down away from ears", "Pull elbows straight back"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Use light resistance band or small weights"
        }
      },
      {
        id: "mw-1-3",
        name: "Chair Squats",
        description: "Stand in front of chair, feet shoulder-width apart. Lower down as if to sit, lightly touch chair, then rise.",
        duration: "10-12 reps, 2 sets",
        image: "https://images.pexels.com/photos/4498551/pexels-photo-4498551.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep weight in heels", "Don't let knees extend past toes"],
        modifications: {
          easier: "Use hands for support when rising",
          harder: "Pause at bottom position for 2-3 seconds"
        }
      },
      {
        id: "mw-1-4",
        name: "Standing Bird Dog",
        description: "Stand with feet hip-width apart. Extend right arm forward while extending left leg behind you, maintaining balance. Alternate sides.",
        duration: "8-10 reps each side, 2 sets",
        image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep hips level", "Move slowly with control"],
        modifications: {
          easier: "Hold onto chair for support",
          harder: "Hold extended position for 2-3 seconds"
        }
      },
      {
        id: "mw-1-5",
        name: "Heel Raises",
        description: "Stand with feet hip-width apart, holding chair for balance if needed. Rise onto balls of feet, then lower heels down.",
        duration: "15 reps, 2 sets",
        image: "https://images.pexels.com/photos/6111614/pexels-photo-6111614.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Rise as high as comfortable", "Control the movement down"],
        modifications: {
          easier: "Do one foot at a time while seated",
          harder: "Single leg heel raises or add slow count"
        }
      }
    ],
    cooldown: [
      {
        id: "cd-1-1",
        name: "Seated Hamstring Stretch",
        description: "Sit on edge of chair, extend one leg, toe pointed up. Hinge forward from hips until gentle stretch is felt.",
        duration: "30 seconds each leg",
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep back straight", "Don't round shoulders"],
        modifications: {
          easier: "Less forward hinge",
          harder: "Reach further toward toes"
        }
      },
      {
        id: "cd-1-2",
        name: "Chest Opener",
        description: "Stand or sit tall, clasp hands behind back. Gently lift arms while keeping shoulders down.",
        duration: "30 seconds",
        image: "https://images.pexels.com/photos/3822302/pexels-photo-3822302.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Focus on opening chest", "Keep neck relaxed"],
        modifications: {
          easier: "Smaller movement range",
          harder: "Add slight back bend if comfortable"
        }
      },
      {
        id: "cd-1-3",
        name: "Deep Breathing",
        description: "Sit comfortably, place hands on belly. Inhale deeply through nose for 4 counts, feeling belly expand. Exhale slowly through mouth for 6 counts.",
        duration: "5-6 breaths",
        image: "https://images.pexels.com/photos/775417/pexels-photo-775417.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Focus on complete exhalation", "Keep shoulders relaxed"],
        modifications: {
          easier: "Shorter breath count",
          harder: "Longer breath count with breath retention"
        }
      }
    ]
  },

  // Day 2: Core & Balance
  {
    day: 2,
    title: "Core & Balance",
    focus: "Abdominals, Back, Stability",
    duration: "30-35 min",
    intensity: "Low to Moderate",
    description: "Strengthen your core and improve balance with gentle exercises that support better posture and stability in daily activities.",
    warmup: [
      {
        id: "wu-2-1",
        name: "Seated Spinal Twist",
        description: "Sit on chair edge, place right hand on left knee, left hand behind hip. Gently twist to left, looking over shoulder. Switch sides.",
        duration: "30 seconds each side",
        image: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Initiate twist from core", "Keep both sitting bones grounded"],
        modifications: {
          easier: "Smaller twist",
          harder: "Hold twist longer"
        }
      },
      {
        id: "wu-2-2",
        name: "Gentle Cat-Cow",
        description: "On hands and knees, alternate between arching back (cow) and rounding back (cat), moving with breath.",
        duration: "1 minute",
        image: "https://images.pexels.com/photos/3822301/pexels-photo-3822301.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Sync movement with breath", "Keep wrists under shoulders, knees under hips"],
        modifications: {
          easier: "Do from seated position",
          harder: "Add longer holds at each position"
        }
      },
      {
        id: "wu-2-3",
        name: "Standing Hip Circles",
        description: "Stand holding chair for support, circle one leg at a time in smooth, controlled motions.",
        duration: "30 seconds each leg",
        image: "https://images.pexels.com/photos/8436764/pexels-photo-8436764.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep circles small and controlled", "Maintain stable upper body"],
        modifications: {
          easier: "Very small circles",
          harder: "Larger circles with more hip rotation"
        }
      }
    ],
    mainWorkout: [
      {
        id: "mw-2-1",
        name: "Seated Abdominal Contractions",
        description: "Sit tall on chair edge, hands on belly. Exhale while drawing navel to spine, contracting abs. Hold, then release.",
        duration: "10 reps, hold 3-5 seconds each",
        image: "https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Focus on deep contraction", "Maintain proper breathing"],
        modifications: {
          easier: "Shorter holds",
          harder: "Add gentle twist while contracting"
        }
      },
      {
        id: "mw-2-2",
        name: "Seated Leg Lifts",
        description: "Sit tall on chair, extend one leg parallel to floor. Hold, then lower and repeat. Switch legs.",
        duration: "10 reps each leg, 2 sets",
        image: "https://images.pexels.com/photos/8436566/pexels-photo-8436566.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep back straight", "Extend through heel"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Hold extended position longer"
        }
      },
      {
        id: "mw-2-3",
        name: "Modified Plank",
        description: "From hands and knees, walk hands forward and hold position with back flat, creating diagonal line from knees to head.",
        duration: "20-30 seconds, 2 sets",
        image: "https://images.pexels.com/photos/6551088/pexels-photo-6551088.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Engage core throughout", "Keep neck in line with spine"],
        modifications: {
          easier: "Keep knees directly under hips",
          harder: "Extend time or lift one arm briefly"
        }
      },
      {
        id: "mw-2-4",
        name: "Standing Side Leg Lifts",
        description: "Stand holding chair for support, lift one leg out to side with foot flexed. Lower and repeat. Switch sides.",
        duration: "10 reps each leg, 2 sets",
        image: "https://images.pexels.com/photos/4498531/pexels-photo-4498531.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep hips facing forward", "Don't lean to opposite side"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Hold at top position for 2-3 seconds"
        }
      },
      {
        id: "mw-2-5",
        name: "Chair Yoga: Mountain to Forward Fold",
        description: "Stand behind chair, hands on chairback. Step back, hinge at hips to create diagonal line with back flat. Return to standing.",
        duration: "10 reps, slow and controlled",
        image: "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep back flat, not rounded", "Bend knees slightly if needed"],
        modifications: {
          easier: "Less forward hinge",
          harder: "Add gentle spinal twist at bottom position"
        }
      }
    ],
    cooldown: [
      {
        id: "cd-2-1",
        name: "Child's Pose (Modified)",
        description: "Kneel on floor, big toes touching, knees apart. Reach arms forward on floor or bed, rest forehead down.",
        duration: "60 seconds",
        image: "https://images.pexels.com/photos/3822214/pexels-photo-3822214.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Breathe deeply into back", "Relax shoulders away from ears"],
        modifications: {
          easier: "Rest on chair seat instead of floor",
          harder: "Extend arms further"
        }
      },
      {
        id: "cd-2-2",
        name: "Gentle Spinal Twist",
        description: "Lie on back, knees bent. Drop knees to one side while looking to opposite side. Switch sides.",
        duration: "45 seconds each side",
        image: "https://images.pexels.com/photos/3757379/pexels-photo-3757379.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep shoulders on floor", "Breathe into the twist"],
        modifications: {
          easier: "Place pillow between knees and under bottom knee",
          harder: "Extend top arm further for deeper stretch"
        }
      },
      {
        id: "cd-2-3",
        name: "Diaphragmatic Breathing",
        description: "Lie comfortably on back, one hand on belly, one on chest. Breathe deeply into belly, feeling it rise more than chest.",
        duration: "8-10 breaths",
        image: "https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Focus on belly rising with inhale", "Empty lungs completely on exhale"],
        modifications: {
          easier: "Do seated if lying is uncomfortable",
          harder: "Add longer exhales (count of 6-8)"
        }
      }
    ]
  },

  // Day 3: Flexibility & Mobility
  {
    day: 3,
    title: "Flexibility & Mobility",
    focus: "Joint Health, Range of Motion",
    duration: "30-35 min",
    intensity: "Low",
    description: "Improve your flexibility, joint mobility, and release tension with gentle movements and longer-held stretches.",
    warmup: [
      {
        id: "wu-3-1",
        name: "Neck Mobility Series",
        description: "Gently look right, left, up, down, and ear to shoulder. Move slowly with control.",
        duration: "2 minutes total",
        image: "https://images.pexels.com/photos/6551095/pexels-photo-6551095.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Never force movement", "Keep breathing steady"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Add gentle diagonal movements"
        }
      },
      {
        id: "wu-3-2",
        name: "Wrist and Ankle Circles",
        description: "Circle wrists in both directions, then repeat with ankles, seated or standing.",
        duration: "30 seconds each joint, each direction",
        image: "https://images.pexels.com/photos/4148937/pexels-photo-4148937.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Make circles smooth and controlled", "Increase circle size gradually"],
        modifications: {
          easier: "Support limbs if needed",
          harder: "Combine with gentle resistance"
        }
      },
      {
        id: "wu-3-3",
        name: "Standing Side Reaches",
        description: "Stand with feet wider than hips, reach one arm overhead and to opposite side. Switch sides.",
        duration: "30 seconds each side",
        image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep both feet grounded", "Breathe into the stretched side"],
        modifications: {
          easier: "Smaller reach",
          harder: "Hold at end range longer"
        }
      }
    ],
    mainWorkout: [
      {
        id: "mw-3-1",
        name: "Seated Forward Fold",
        description: "Sit on chair edge, feet flat. Hinge at hips to fold forward, arms reaching toward floor.",
        duration: "Hold for 45-60 seconds",
        image: "https://images.pexels.com/photos/3822640/pexels-photo-3822640.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Bend from hips, not waist", "Keep back straight as you fold"],
        modifications: {
          easier: "Smaller fold angle",
          harder: "Reach arms further down"
        }
      },
      {
        id: "mw-3-2",
        name: "Cat-Cow Flow",
        description: "On hands and knees, flow between arching and rounding back, coordinating with breath.",
        duration: "10 complete cycles",
        image: "https://images.pexels.com/photos/3822301/pexels-photo-3822301.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep movement fluid", "Focus on articulating each vertebra"],
        modifications: {
          easier: "Do seated version",
          harder: "Add brief holds at each position"
        }
      },
      {
        id: "mw-3-3",
        name: "Standing Figure 4 Stretch",
        description: "Stand near chair for support, cross ankle over opposite thigh in figure-4 shape. Gently sit back. Switch sides.",
        duration: "45 seconds each leg",
        image: "https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep standing foot firmly planted", "Only go as far as comfortable"],
        modifications: {
          easier: "Do seated or lying on back",
          harder: "Deepen the bend in standing leg"
        }
      },
      {
        id: "mw-3-4",
        name: "Chest and Shoulder Opener",
        description: "Stand in doorway, place forearms on doorframe at 90° angle. Step forward slightly to feel stretch across chest.",
        duration: "45 seconds",
        image: "https://images.pexels.com/photos/8472702/pexels-photo-8472702.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep abdominals engaged", "Avoid arching lower back"],
        modifications: {
          easier: "Less forward step",
          harder: "Single arm at a time, vary arm height"
        }
      },
      {
        id: "mw-3-5",
        name: "Gentle Spine Rotations",
        description: "Sit on chair, feet flat. Place hands on shoulders, elbows out. Rotate upper body left and right.",
        duration: "8-10 rotations each side",
        image: "https://images.pexels.com/photos/4327022/pexels-photo-4327022.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Initiate movement from core", "Keep hips facing forward"],
        modifications: {
          easier: "Smaller rotation range",
          harder: "Hold at end of each rotation briefly"
        }
      },
      {
        id: "mw-3-6",
        name: "Hip Flexor Stretch",
        description: "Stand with one foot forward in split stance. Bend front knee slightly, tuck pelvis to feel stretch in rear leg's hip front.",
        duration: "45 seconds each side",
        image: "https://images.pexels.com/photos/8968520/pexels-photo-8968520.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep front knee over ankle", "Maintain pelvic tilt throughout"],
        modifications: {
          easier: "Smaller stance",
          harder: "Deeper lunge position"
        }
      }
    ],
    cooldown: [
      {
        id: "cd-3-1",
        name: "Gentle Reclined Twist",
        description: "Lie on back, arms out in T-position. Bring knees to chest, then lower to one side while looking to opposite side.",
        duration: "60 seconds each side",
        image: "https://images.pexels.com/photos/3757379/pexels-photo-3757379.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep both shoulders on floor", "Breathe deeply into ribcage"],
        modifications: {
          easier: "Place pillow under knees",
          harder: "Extend top leg for deeper stretch"
        }
      },
      {
        id: "cd-3-2",
        name: "Legs Up The Wall",
        description: "Sit sideways next to wall, swing legs up wall as you lie back. Rest with legs extended up wall, back on floor.",
        duration: "2-3 minutes",
        image: "https://images.pexels.com/photos/6111621/pexels-photo-6111621.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep hips as close to wall as comfortable", "Close eyes and focus on breath"],
        modifications: {
          easier: "Place cushion under hips or move further from wall",
          harder: "Experiment with leg positions (wide V, butterfly)"
        }
      },
      {
        id: "cd-3-3",
        name: "Progressive Relaxation",
        description: "Lie comfortably, systematically tense and release each muscle group from toes to head.",
        duration: "3-4 minutes",
        image: "https://images.pexels.com/photos/3759089/pexels-photo-3759089.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Hold tension for 5 seconds, release for 10", "Notice the difference between tension and relaxation"],
        modifications: {
          easier: "Focus on fewer body parts",
          harder: "Add visualization to each area"
        }
      }
    ]
  },

  // Day 4: Lower Body Focus
  {
    day: 4,
    title: "Lower Body Focus",
    focus: "Legs, Glutes, Hips",
    duration: "35-40 min",
    intensity: "Moderate",
    description: "Strengthen your lower body with focused exercises that improve functional strength for daily activities while supporting joint health.",
    warmup: [
      {
        id: "wu-4-1",
        name: "Seated Leg Swings",
        description: "Sit tall on chair, gently swing one leg forward and back in pendulum motion. Switch legs.",
        duration: "30 seconds each leg",
        image: "https://images.pexels.com/photos/6551135/pexels-photo-6551135.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep movement controlled", "Maintain tall posture"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Add ankle flexion and extension"
        }
      },
      {
        id: "wu-4-2",
        name: "Ankle Alphabet",
        description: "Seated with leg extended, draw all letters of alphabet with foot by moving ankle.",
        duration: "Complete alphabet once per foot",
        image: "https://images.pexels.com/photos/6551134/pexels-photo-6551134.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Make letters as clear as possible", "Keep rest of leg still"],
        modifications: {
          easier: "Do partial alphabet",
          harder: "Do uppercase and lowercase"
        }
      },
      {
        id: "wu-4-3",
        name: "Hip Hinges",
        description: "Stand with feet hip-width apart, hands on hips. Hinge forward from hips, maintaining flat back. Return to standing.",
        duration: "10 repetitions",
        image: "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Push hips back as if closing door with them", "Keep back flat throughout"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Hold briefly at bottom position"
        }
      }
    ],
    mainWorkout: [
      {
        id: "mw-4-1",
        name: "Glute Bridge",
        description: "Lie on back, knees bent, feet flat. Press through heels to lift hips toward ceiling. Lower and repeat.",
        duration: "12 reps, 2 sets",
        image: "https://images.pexels.com/photos/6551096/pexels-photo-6551096.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Squeeze glutes at top position", "Keep core engaged throughout"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Hold at top for 3-5 seconds"
        }
      },
      {
        id: "mw-4-2",
        name: "Chair Squats",
        description: "Stand in front of chair, feet shoulder-width apart. Lower until bottom touches chair, then stand back up.",
        duration: "12 reps, 2 sets",
        image: "https://images.pexels.com/photos/4498551/pexels-photo-4498551.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep weight in heels", "Don't let knees collapse inward"],
        modifications: {
          easier: "Use hands for support when rising",
          harder: "Pause at bottom for 2-3 seconds"
        }
      },
      {
        id: "mw-4-3",
        name: "Standing Leg Curls",
        description: "Stand holding chair for support, bend one knee to bring heel toward buttock. Lower and repeat. Switch legs.",
        duration: "10 reps each leg, 2 sets",
        image: "https://images.pexels.com/photos/6111611/pexels-photo-6111611.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep standing leg slightly bent", "Maintain upright posture"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Add 3-second hold at top position"
        }
      },
      {
        id: "mw-4-4",
        name: "Clamshells",
        description: "Lie on side with knees bent at 45° angle, feet together. Keeping feet together, open top knee like a clamshell. Switch sides.",
        duration: "12 reps each side, 2 sets",
        image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep hips stacked vertically", "Don't roll backward"],
        modifications: {
          easier: "Smaller range of motion",
          harder: "Hold top position for 2-3 seconds"
        }
      },
      {
        id: "mw-4-5",
        name: "Standing Calf Raises",
        description: "Stand near chair for support, rise onto balls of feet, then lower heels back down.",
        duration: "15 reps, 2 sets",
        image: "https://images.pexels.com/photos/6111614/pexels-photo-6111614.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Rise as high as comfortable", "Lower heels with control"],
        modifications: {
          easier: "Use more support from chair",
          harder: "One leg at a time or add hold at top"
        }
      },
      {
        id: "mw-4-6",
        name: "Seated Leg Extensions",
        description: "Sit tall on chair, extend one leg until straight, flexing foot. Lower and repeat. Switch legs.",
        duration: "10 reps each leg, 2 sets",
        image: "https://images.pexels.com/photos/6551089/pexels-photo-6551089.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep back against chair", "Extend through heel"],
        modifications: {
          easier: "Partial extension",
          harder: "Hold extended position for 3 seconds"
        }
      }
    ],
    cooldown: [
      {
        id: "cd-4-1",
        name: "Seated Hamstring Stretch",
        description: "Sit on chair edge, extend one leg with heel on floor, toe up. Hinge forward from hips until stretch is felt in back of leg.",
        duration: "45 seconds each leg",
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep back straight", "Breathe into the stretch"],
        modifications: {
          easier: "Less forward bend",
          harder: "Place foot on stool for deeper stretch"
        }
      },
      {
        id: "cd-4-2",
        name: "Standing Quad Stretch",
        description: "Stand near chair for support, bend one knee to bring foot toward buttock, hold ankle or pant leg. Switch legs.",
        duration: "30 seconds each leg",
        image: "https://images.pexels.com/photos/4327135/pexels-photo-4327135.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep knees close together", "Stand tall through spine"],
        modifications: {
          easier: "Hold for shorter time",
          harder: "Add slight forward tilt to deepen stretch"
        }
      },
      {
        id: "cd-4-3",
        name: "Seated Butterfly Stretch",
        description: "Sit tall on chair, bring soles of feet together, letting knees fall outward. Gently press knees down with hands.",
        duration: "60 seconds",
        image: "https://images.pexels.com/photos/6551087/pexels-photo-6551087.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Sit on edge of chair", "Keep back straight"],
        modifications: {
          easier: "Feet further from body",
          harder: "Gentle forward hinge from hips"
        }
      }
    ]
  },

  // Day 5: Gentle Cardio & Arms
  {
    day: 5,
    title: "Gentle Cardio & Arms",
    focus: "Heart Health, Upper Body",
    duration: "35-40 min",
    intensity: "Low to Moderate",
    description: "Boost your energy and heart health with low-impact cardio movements, combined with gentle upper body strengthening.",
    warmup: [
      {
        id: "wu-5-1",
        name: "Seated Arm Circles",
        description: "Sit tall, extend arms to sides at shoulder height. Make small circles forward, then backward.",
        duration: "30 seconds each direction",
        image: "https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep shoulders relaxed", "Circles can start small and grow"],
        modifications: {
          easier: "Circle just one arm at a time",
          harder: "Larger circles or add light hand weights"
        }
      },
      {
        id: "wu-5-2",
        name: "Standing March",
        description: "March in place, lifting knees to comfortable height. Add light arm movements if desired.",
        duration: "1 minute",
        image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Focus on posture", "Find comfortable pace"],
        modifications: {
          easier: "March slower with smaller steps",
          harder: "Lift knees higher and add purposeful arm movements"
        }
      },
      {
        id: "wu-5-3",
        name: "Shoulder Shrugs and Rolls",
        description: "Raise shoulders toward ears, hold briefly, release down. Then roll shoulders forward and backward.",
        duration: "10 shrugs, 10 rolls each direction",
        image: "https://images.pexels.com/photos/7991661/pexels-photo-7991661.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Fully release tension on drop", "Make rolls smooth and controlled"],
        modifications: {
          easier: "Do one side at a time if needed",
          harder: "Add brief holds at peak positions"
        }
      }
    ],
    mainWorkout: [
      {
        id: "mw-5-1",
        name: "Seated Boxing",
        description: "Sit tall with core engaged. Punch forward alternating arms, as if hitting a punching bag.",
        duration: "30 seconds, 3 sets with brief rest between",
        image: "https://images.pexels.com/photos/6111608/pexels-photo-6111608.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Extend arms fully", "Engage core throughout"],
        modifications: {
          easier: "Slower pace",
          harder: "Add light hand weights or resistance bands"
        }
      },
      {
        id: "mw-5-2",
        name: "Chair Stand and Tap",
        description: "Stand in front of chair. Tap right foot to side, then sit partially down and stand back up. Alternate feet.",
        duration: "10 reps each side, 2 sets",
        image: "https://images.pexels.com/photos/4498535/pexels-photo-4498535.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Touch chair lightly when sitting", "Keep movements controlled"],
        modifications: {
          easier: "Use hands for support",
          harder: "Lower further into chair"
        }
      },
      {
        id: "mw-5-3",
        name: "Wall Push-ups",
        description: "Stand facing wall, place hands on wall at shoulder height. Bend elbows to bring chest toward wall, then push back.",
        duration: "12 reps, 2 sets",
        image: "https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep body straight from head to heels", "Engage core"],
        modifications: {
          easier: "Hands higher on wall",
          harder: "Feet further from wall"
        }
      },
      {
        id: "mw-5-4",
        name: "Seated Bicycle",
        description: "Sit on chair edge, lean back slightly with hands on chair sides for support. Alternate bringing knee up while extending other leg.",
        duration: "30 seconds, 2 sets",
        image: "https://images.pexels.com/photos/6551135/pexels-photo-6551135.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Maintain controlled breathing", "Keep back supported"],
        modifications: {
          easier: "Smaller movements",
          harder: "Add upper body twist toward raised knee"
        }
      },
      {
        id: "mw-5-5",
        name: "Bicep Curls with Household Items",
        description: "Stand with feet hip-width apart, holding water bottles or canned goods. Curl items toward shoulders, lower back down.",
        duration: "12 reps, 2 sets",
        image: "https://images.pexels.com/photos/4498542/pexels-photo-4498542.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep elbows close to sides", "Control movement in both directions"],
        modifications: {
          easier: "Use lighter items or no weight",
          harder: "Use heavier items or add slow count"
        }
      },
      {
        id: "mw-5-6",
        name: "Standing Side Taps",
        description: "Stand with feet together, tap one foot out to side and return. Alternate sides at comfortable pace.",
        duration: "45 seconds, 2 sets",
        image: "https://images.pexels.com/photos/4498560/pexels-photo-4498560.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Maintain upright posture", "Add arm movements if desired"],
        modifications: {
          easier: "Hold chair for support",
          harder: "Add gentle hop between taps"
        }
      },
      {
        id: "mw-5-7",
        name: "Overhead Press",
        description: "Sit or stand with elbows bent at 90°, hands near shoulders. Press arms overhead, then return to starting position.",
        duration: "12 reps, 2 sets",
        image: "https://images.pexels.com/photos/6551085/pexels-photo-6551085.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Don't lock elbows at top", "Keep shoulders down away from ears"],
        modifications: {
          easier: "Use no weights",
          harder: "Add light weights or resistance band"
        }
      }
    ],
    cooldown: [
      {
        id: "cd-5-1",
        name: "Chest Stretch",
        description: "Stand in doorway, place forearms on doorframe at shoulder height. Gently lean forward until stretch is felt across chest.",
        duration: "30 seconds",
        image: "https://images.pexels.com/photos/8472702/pexels-photo-8472702.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep abdominals engaged", "Don't arch lower back"],
        modifications: {
          easier: "Less forward lean",
          harder: "One arm at a time at different heights"
        }
      },
      {
        id: "cd-5-2",
        name: "Tricep Stretch",
        description: "Reach one arm overhead, bend elbow to place hand between shoulder blades. Use other hand to gently press on elbow. Switch arms.",
        duration: "30 seconds each arm",
        image: "https://images.pexels.com/photos/4327134/pexels-photo-4327134.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Keep stretching arm close to head", "Don't force movement"],
        modifications: {
          easier: "Less pressure on elbow",
          harder: "Gently lean toward opposite side"
        }
      },
      {
        id: "cd-5-3",
        name: "Standing Forward Fold",
        description: "Stand with feet hip-width apart, slowly roll down vertebra by vertebra toward toes. Hold, then slowly roll back up.",
        duration: "45 seconds",
        image: "https://images.pexels.com/photos/8436552/pexels-photo-8436552.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Bend knees generously", "Let head and arms hang heavy"],
        modifications: {
          easier: "Hold onto chair or wall",
          harder: "Straighten legs more if comfortable"
        }
      },
      {
        id: "cd-5-4",
        name: "Deep Breathing",
        description: "Stand or sit comfortably, close eyes. Inhale deeply through nose for count of 4, exhale slowly through mouth for count of 6.",
        duration: "6-8 breath cycles",
        image: "https://images.pexels.com/photos/775417/pexels-photo-775417.jpeg?auto=compress&cs=tinysrgb&w=600",
        tips: ["Feel ribcage expand in all directions", "Make exhale longer than inhale"],
        modifications: {
          easier: "Shorter breath counts",
          harder: "Add brief hold after inhale"
        }
      }
    ]
  }
];