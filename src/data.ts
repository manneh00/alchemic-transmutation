import type { ElementalQuestion, TraitExpressions } from "@/types";

export const elementalQuestions: ElementalQuestion[] = [
  {
    trait: "drive",
    element: "fire",
    question:
      "Was my drive steady and purposeful (Healthy), or was it unmotivated to follow through on my goals (Toxic)?",
  },
  {
    trait: "libido",
    element: "fire",
    question:
      "Was my libido strong and satisfying (Healthy), or compulsive and absent (Toxic)?",
  },
  {
    trait: "ambition",
    element: "fire",
    question:
      "Was my ambition realistic and motivating (Healthy), or manic and depressive (Toxic)?",
  },
  {
    trait: "emotions",
    element: "water",
    question:
      "Did my emotions move naturally and resolve (Healthy), or did they stagnate or overwhelm me (Toxic)?",
  },
  {
    trait: "adaptability",
    element: "water",
    question:
      "Was I emotionally adaptable to changes (Healthy), or rigid and emotionally stuck (Toxic)?",
  },
  {
    trait: "intuition",
    element: "water",
    question:
      "Did I feel connected to my deeper intuition (Healthy), or lost and disconnected (Toxic)?",
  },
  {
    trait: "thoughts",
    element: "air",
    question:
      "Was my thinking clear, flexible, and strategic (Healthy), or chaotic, obsessive, or paralyzed (Toxic)?",
  },
  {
    trait: "communication",
    element: "air",
    question:
      "Was my communication smooth, expressive, and truthful (Healthy), or anxious, blocked, or deceitful (Toxic)?",
  },
  {
    trait: "curiosity",
    element: "air",
    question:
      "Was my curiosity alive and enhancing (Healthy), or scattered, deadened, or anxiety-driven (Toxic)?",
  },
  {
    trait: "stability",
    element: "earth",
    question:
      "Did I feel physically grounded and stable (Healthy), or restless, unbalanced, or lethargic (Toxic)?",
  },
  {
    trait: "patience",
    element: "earth",
    question:
      "Did I maintain patience and endurance through challenges (Healthy), or collapse into rigidity or passivity (Toxic)?",
  },
  {
    trait: "action",
    element: "earth",
    question:
      "Did I execute practical actions steadily (Healthy), or procrastinate and resist tangible work (Toxic)?",
  },
];

export const traitExpressions: TraitExpressions = {
  libido: {
    healthy: {
      fire: {
        trait: "libido",
        expression:
          "Strong, naturally arising libido; drive to create and conquer; healthy desire without desperation.",
      },
      water: {
        trait: "emotions",
        expression:
          "Sexual connection rooted in emotional depth; empathy during intimacy; emotional richness fuels libido.",
      },
      air: {
        trait: "curiosity",
        expression:
          "Playful, curious attraction; flirty communication; mental stimulation enhances desire.",
      },
      earth: {
        trait: "stability",
        expression:
          "Strong physical stamina; slow-building, deeply satisfying arousal; stability in sexual relationships.",
      },
    },
    toxic: {
      fire: {
        trait: "libido",
        expression:
          "Compulsive sexual urges; aggressive dominance; manic pursuit without satisfaction.",
      },
      water: {
        trait: "emotions",
        expression:
          "Emotional entanglement instead of real connection; using sex to numb feelings; withdrawal from intimacy.",
      },
      air: {
        trait: "curiosity",
        expression:
          "Disconnection from bodily desire; sexual anxiety; compulsive porn consumption without emotional engagement.",
      },
      earth: {
        trait: "stability",
        expression:
          "Mechanical or purely physical sex without intimacy; complete disinterest or physical exhaustion blocking libido.",
      },
    },
  },
  drive: {
    healthy: {
      fire: {
        trait: "drive",
        expression:
          "Natural, steady pursuit of meaningful goals; courageous initiative; quick recovery after failure; energized leadership without forcing.",
      },
      water: {
        trait: "intuition",
        expression:
          "Pursuit of emotionally meaningful goals; adaptive adjustment of plans when necessary; drive sustained by deep values and emotional resonance.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Pursuit of ideas through strategy and communication; drive sharpened by curiosity, learning, and innovation; adaptable goal adjustment through new insights.",
      },
      earth: {
        trait: "action",
        expression:
          "Steady, disciplined advancement toward goals; patient construction of foundations; ability to sustain effort through monotony and setbacks.",
      },
    },
    toxic: {
      fire: {
        trait: "drive",
        expression:
          "Reckless pursuit of goals without foresight; aggressive domination; burnout from manic overexertion; impulsive goal-hopping without satisfaction.",
      },
      water: {
        trait: "emotions",
        expression:
          "Obsessive attachment to emotional outcomes; abandoning goals when emotional states fluctuate; seeking goals only for emotional validation; drowning in indecision.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Endless planning without execution; getting trapped in analysis-paralysis; losing drive through overthinking risks; intellectual rationalizations for inaction.",
      },
      earth: {
        trait: "action",
        expression:
          "Obsessive rigidity toward outdated goals; refusal to adapt when necessary; procrastination hidden behind 'preparing' or 'waiting'; collapse into passive inertia.",
      },
    },
  },
  ambition: {
    healthy: {
      fire: {
        trait: "ambition",
        expression:
          "Visionary goal-setting with courageous pursuit; balanced desire for greatness fueled by passion, not desperation; inspiring others without exploitation.",
      },
      water: {
        trait: "intuition",
        expression:
          "Ambition rooted in personal meaning and service; pursuing dreams that emotionally fulfill self and others; resilient to emotional setbacks.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Strategic, innovative ambition fueled by learning, curiosity, and communication; ability to adjust and evolve the dream intelligently.",
      },
      earth: {
        trait: "action",
        expression:
          "Ambition realized through discipline, patient growth, and practical achievement; building real foundations to sustain success; loyalty to true values over trends.",
      },
    },
    toxic: {
      fire: {
        trait: "ambition",
        expression:
          "Obsessive hunger for dominance or recognition; manic overreach without planning; sacrificing self and others for hollow victories; raging against obstacles without learning.",
      },
      water: {
        trait: "intuition",
        expression:
          "Chasing ambition for emotional validation; abandoning missions when emotional approval is missing; drowning in self-pity when facing obstacles; clinging to fantasies without action.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Detached, empty ambition chasing titles or ideas without substance; lost in endless scheming without action; disconnection from true desires behind goals; talking big but acting small.",
      },
      earth: {
        trait: "action",
        expression:
          "Ambition collapsing into mechanical routine; fear of expansion into new realms; clinging to obsolete structures 'because it's safe'; grinding without joy until spirit dies.",
      },
    },
  },
  emotions: {
    healthy: {
      fire: {
        trait: "ambition",
        expression:
          "Passionate emotional energy fueling creativity and courage; quick emotional recovery after setbacks; ability to inspire emotional strength in others.",
      },
      water: {
        trait: "emotions",
        expression:
          "Deep, flowing emotional awareness; ability to feel, process, and release emotions naturally; emotional resilience; authentic vulnerability.",
      },
      air: {
        trait: "communication",
        expression:
          "Articulate emotional awareness; capacity to translate feelings into words and ideas; maintaining emotional objectivity when needed.",
      },
      earth: {
        trait: "action",
        expression:
          "Steady emotional foundation; consistent emotional support for self and others; practical expression of care through actions.",
      },
    },
    toxic: {
      fire: {
        trait: "drive",
        expression:
          "Explosive anger; emotional volatility; destructive outbursts; emotional exhaustion from burning too hot.",
      },
      water: {
        trait: "intuition",
        expression:
          "Emotional stagnation (repression or wallowing); drowning in sadness; clinging to past emotional wounds; emotional manipulation to control others.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Overintellectualizing emotions to avoid feeling them; rationalizing emotional wounds instead of healing them; anxiety masquerading as emotional detachment.",
      },
      earth: {
        trait: "patience",
        expression:
          "Emotional numbness; mechanical 'caring' without real feeling; burying emotions under routines; fear of emotional vulnerability.",
      },
    },
  },
  adaptability: {
    healthy: {
      fire: {
        trait: "drive",
        expression:
          "Ability to adapt by courageous action; thriving under pressure; using challenges to ignite growth and motivation.",
      },
      water: {
        trait: "emotions",
        expression:
          "Smooth emotional and psychological adjustment to change; ability to flow around obstacles while staying connected to true goals.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Flexible thinking; quick re-strategizing in response to new information; adapting through communication and intelligence.",
      },
      earth: {
        trait: "action",
        expression:
          "Patient restructuring of habits and routines in response to change; building new foundations carefully after disruption.",
      },
    },
    toxic: {
      fire: {
        trait: "drive",
        expression:
          "Impulsive reactions to change without thinking; reckless abandonment of plans under pressure; burning bridges unnecessarily.",
      },
      water: {
        trait: "emotions",
        expression:
          "Passive acceptance of negative situations; loss of identity when circumstances change; victim mindset in response to challenges.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Scattered, inconsistent behavior; shifting too quickly without commitment; endless rethinking without stable execution.",
      },
      earth: {
        trait: "action",
        expression:
          "Rigid resistance to change; clinging to outdated structures; fear-based paralysis preventing growth.",
      },
    },
  },
  intuition: {
    healthy: {
      fire: {
        trait: "drive",
        expression:
          "Instinctive gut responses that drive courageous decisions; trusting personal fire to guide actions in uncertain situations.",
      },
      water: {
        trait: "intuition",
        expression:
          "Deep, flowing intuitive knowing; sensing undercurrents of people and situations; emotional intelligence guiding correct action.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Intuitive synthesis of information into sudden insights; flashes of knowing through intellectual frameworks; clarity strikes like lightning.",
      },
      earth: {
        trait: "stability",
        expression:
          "Somatic intuition; bodily signals indicating truth or danger; grounded knowing based on real-world experience and deep inner alignment.",
      },
    },
    toxic: {
      fire: {
        trait: "drive",
        expression:
          "Acting on blind impulses without discernment; reckless choices justified as 'intuition'; confusing fear-driven reaction with true instinct.",
      },
      water: {
        trait: "intuition",
        expression:
          "Emotional projection mistaken for intuition; paranoia or fantasy-driven 'visions'; clinging to imagined signs while ignoring reality.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Overthinking disguised as 'intuition'; endless hypothetical guessing; confusing noise for signal.",
      },
      earth: {
        trait: "stability",
        expression:
          "Suppressed bodily awareness; ignoring physical warnings; hyper-rationalizing to dismiss gut instincts.",
      },
    },
  },
  thoughts: {
    healthy: {
      fire: {
        trait: "ambition",
        expression:
          "Bold, action-oriented thinking; ability to envision and commit to ideas quickly; courageous mental leaps when needed.",
      },
      water: {
        trait: "emotions",
        expression:
          "Emotionally intelligent thinking; ability to integrate feelings and thoughts; compassionate reasoning.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Clear, flexible, logical thought processes; ability to analyze, reason, and adapt quickly; detached clarity when needed.",
      },
      earth: {
        trait: "patience",
        expression:
          "Structured, pragmatic thought; patient, detailed planning and execution; long-term strategic thinking.",
      },
    },
    toxic: {
      fire: {
        trait: "ambition",
        expression:
          "Rash decision-making without reflection; mental impulsivity; clinging stubbornly to ideas out of pride.",
      },
      water: {
        trait: "emotions",
        expression:
          "Emotional bias distorting thinking; daydreaming replacing practical planning; drowning in fantasy scenarios.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Overanalyzing everything to paralysis; obsessive looping thoughts; disconnection from reality due to abstract overthinking.",
      },
      earth: {
        trait: "patience",
        expression:
          "Rigid mental frameworks; unwillingness to rethink assumptions; stubborn intellectual conservatism.",
      },
    },
  },
  communication: {
    healthy: {
      fire: {
        trait: "drive",
        expression:
          "Dynamic, passionate speaking and writing; inspiring others through energetic communication; courageous honesty.",
      },
      water: {
        trait: "emotions",
        expression:
          "Emotionally sensitive communication; deep listening and heartfelt expression; ability to comfort and nurture through words.",
      },
      air: {
        trait: "communication",
        expression:
          "Clear, articulate, creative expression of ideas; ability to adapt language to different audiences; logical persuasion.",
      },
      earth: {
        trait: "stability",
        expression:
          "Grounded, practical communication; speaking to convey stability and reassurance; reliable verbal commitments.",
      },
    },
    toxic: {
      fire: {
        trait: "drive",
        expression:
          "Aggressive communication; dominating conversations; speaking impulsively without considering consequences.",
      },
      water: {
        trait: "emotions",
        expression:
          "Manipulative speech; passive-aggressive comments; using communication to guilt or control emotionally.",
      },
      air: {
        trait: "communication",
        expression:
          "Talking without substance; evading truth with word games; deceitful rationalizations; endless talking without real connection.",
      },
      earth: {
        trait: "stability",
        expression:
          "Monotonous, overly rigid communication; difficulty expressing emotions; using silence or formality to create distance.",
      },
    },
  },
  curiosity: {
    healthy: {
      fire: {
        trait: "ambition",
        expression:
          "Bold exploration of new ideas and experiences; courageous questioning; seeking challenges and adventures to grow.",
      },
      water: {
        trait: "intuition",
        expression:
          "Deep, soulful curiosity about the human experience, relationships, and emotional truth; seeking to understand inner worlds.",
      },
      air: {
        trait: "curiosity",
        expression:
          "Intellectual curiosity; love of learning, discovery, and synthesis; exploring ideas with joy and flexibility.",
      },
      earth: {
        trait: "action",
        expression:
          "Practical curiosity about building, crafting, solving tangible problems; wanting to understand how things work physically.",
      },
    },
    toxic: {
      fire: {
        trait: "ambition",
        expression:
          "Reckless chasing of novelty; thrill-seeking without purpose; impulsive distraction disguised as 'exploration.'",
      },
      water: {
        trait: "intuition",
        expression:
          "Voyeuristic emotional probing; losing self in others' stories; obsessive curiosity about personal dramas without real learning.",
      },
      air: {
        trait: "curiosity",
        expression:
          "Scatterbrained obsession with trivia; endless information consumption without application; curiosity fueled by anxiety rather than wonder.",
      },
      earth: {
        trait: "action",
        expression:
          "Obsession with material details at the expense of bigger vision; hoarding knowledge without using it; fear of speculative or abstract thinking.",
      },
    },
  },
  stability: {
    healthy: {
      fire: {
        trait: "ambition",
        expression:
          "Passion rooted in grounded purpose; courageous action without losing balance; stable fire that sustains over time.",
      },
      water: {
        trait: "emotions",
        expression:
          "Emotional consistency; stable emotional base even when adapting; deep internal calm supporting stability.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Consistent thought patterns; grounded, strategic communication; mental resilience under pressure.",
      },
      earth: {
        trait: "stability",
        expression:
          "Physical grounding; bodily strength; rootedness in practical reality; financial, home, and bodily stability.",
      },
    },
    toxic: {
      fire: {
        trait: "ambition",
        expression:
          "Explosive bursts of action followed by burnout; unstable anger or restless agitation; recklessness masked as courage.",
      },
      water: {
        trait: "emotions",
        expression:
          "Emotional rigidity; fear of emotional change; holding onto old emotional wounds instead of moving forward.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Mental rigidity; fixed mindset; refusal to entertain new ideas; trapped in old thought patterns.",
      },
      earth: {
        trait: "stability",
        expression:
          "Stagnation; stubbornness; fear of change; obsession with material security at the cost of growth.",
      },
    },
  },
  patience: {
    healthy: {
      fire: {
        trait: "drive",
        expression:
          "Channeling passionate drive into long-term goals; ability to wait while preparing for decisive action.",
      },
      water: {
        trait: "emotions",
        expression:
          "Allowing emotional processes to unfold naturally; emotional maturity in timing decisions.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Strategically waiting for the right information or alignment; patience through logical preparation.",
      },
      earth: {
        trait: "patience",
        expression:
          "Endurance, persistence, slow-building mastery; loyalty to values over immediate gratification.",
      },
    },
    toxic: {
      fire: {
        trait: "drive",
        expression:
          "Suppressed anger boiling under surface; impatience masked as 'waiting' but seething inside; passive-aggressive outbursts.",
      },
      water: {
        trait: "emotions",
        expression:
          "Endless emotional waiting for 'perfect' feelings before acting; wallowing in emotional inertia.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Overanalyzing every possibility while avoiding action; waiting forever for 'certainty' that never comes.",
      },
      earth: {
        trait: "patience",
        expression:
          "Fear-based delay; refusal to change under the guise of 'being patient'; entrenchment in comfort zones.",
      },
    },
  },
  action: {
    healthy: {
      fire: {
        trait: "action",
        expression:
          "Taking bold steps when needed; grounding visions into real-world tasks through focused effort.",
      },
      water: {
        trait: "adaptability",
        expression:
          "Building relationships and structures with emotional intelligence; harmonizing tasks with emotional needs.",
      },
      air: {
        trait: "thoughts",
        expression:
          "Planning, organizing, and executing based on logical frameworks; adaptable action informed by insight.",
      },
      earth: {
        trait: "action",
        expression:
          "Consistent, methodical, tangible action toward goals; strong work ethic grounded in reality.",
      },
    },
    toxic: {
      fire: {
        trait: "action",
        expression:
          "Starting projects impulsively without foundations; wasting energy on unsustainable action; fiery collapse when faced with setbacks.",
      },
      water: {
        trait: "adaptability",
        expression:
          "Over-prioritizing emotional comfort over necessary action; avoiding hard tasks to stay 'emotionally safe.'",
      },
      air: {
        trait: "thoughts",
        expression:
          "Paralysis by planning; constant reorganization without execution; living in task lists instead of real-world movement.",
      },
      earth: {
        trait: "action",
        expression:
          "Mechanical labor without soul; mindless grind without reflection; fear of risk leading to fruitless routines.",
      },
    },
  },
};
