const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;


app.use(cors());

// Routes
app.get('/service', (req, res) => {
  const services = [
    {
      id: 1,
      title: "Personal Training",
      content: "We offer customized personal training sessions to help you achieve your fitness goals."
    },
    {
      id: 2,
      title: "Group Classes",
      content: "Join our fun and energetic group classes that are tailored for all fitness levels."
    },
    {
      id: 3,
      title: "Nutrition Guidance",
      content: "Our experts provide nutrition plans to complement your workout routine and enhance your health."
    },
    {
      id: 4,
      title: "Yoga & Meditation",
      content: "Relax and strengthen your body and mind with our yoga and meditation sessions."
    },
    {
      id: 5,
      title: "Wellness Programs",
      content: "Our holistic wellness programs help you focus on both physical and mental well-being."
    }
  ];
  res.send(services);
});

app.get('/Workout', (req, res) => {
  const workouts = [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(workouts);
});
app.get('/Dietplan', (req, res) => {
  const Dietplan= [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(Dietplan);
});
app.get('/Yoga', (req, res) => {
  const Yoga= [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(Yoga);
});
app.get('/Diabetes', (req, res) => {
  const Diabetes= [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(Diabetes);
});
app.get('/Health', (req, res) => {
  const Health= [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(Health);
  
});

app.get('/Nutrination', (req, res) => {
  const  Nutrination= [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(Nutrination);
  
});

app.get('/Running', (req, res) => {
  const  Running=[
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(Running);
  
});
app.get('/Workout/1', (req, res) => {
  const workouts1 = [
    {
      id: 1,
      title: "Full Body Workout",
      content: "This workout focuses on all major muscle groups, using both bodyweight and equipment exercises."
    },
    {
      id: 2,
      title: "Cardio Blast",
      content: "An intense cardio workout designed to burn calories and improve your cardiovascular health."
    },
    {
      id: 3,
      title: "Strength Training",
      content: "Build muscle and increase strength with targeted weightlifting exercises."
    },
    {
      id: 4,
      title: "HIIT Workout",
      content: "High-Intensity Interval Training (HIIT) combines short bursts of intense activity followed by rest."
    },
    {
      id: 5,
      title: "Yoga Flow",
      content: "A gentle yoga session focusing on flexibility, balance, and mental relaxation."
    }
  ];
  res.send(workouts1);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
