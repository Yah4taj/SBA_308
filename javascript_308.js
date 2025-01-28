// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

   //================   Validating Data   ================//

let course_id = CourseInfo.id
let group = AssignmentGroup.course_id

   function mainData(course,group) {
    if (group.course_id !== course.id) {
      throw new Error(`Invalid data: AssignmentGroup ${group.id} does not belong to Course ${course.id}`);
    }
    
    group.assignments.forEach(assignment => {
      if (assignment.points_possible === 0) {
        throw new Error(`Invalid data: Assignment ${assignment.id} has zero possible points.`);
      }

    });

}


function  calculateWeightedAverage(assignments) {

student1['id: 125', 'grades: 47, 150' ];
student2 ['id: 132', 'grade: 39, 140'];


  // Input: Array of assignment objects with scores, possible points, and late status
  let totalWeightedScore = 0;
  let totalPossiblePoints = 0;
  

  assignments.forEach((assignment) => {
    let { score, possiblePoints, isLate } = assignment;

    // Deduct 10% of possible points if the assignment is late
    if (submitted_at > due_at) {
      score -= 0.1 * possiblePoints;
      score = Math.max(0, score); // Ensure score is not negative
    }

    totalWeightedScore += score;
    totalPossiblePoints += possiblePoints;
  });

  if (totalPossiblePoints === 0) {
    throw new Error("Total possible points cannot be zero.");
  }

  // Calculate the weighted average
  const weightedAverage = (totalWeightedScore / totalPossiblePoints) * 100;
  return weightedAverage.toFixed(2); // Return weighted average as a percentage (e.g., 85.67)
}

// Example Usage
try {
  const assignments = [
    { score: 85, possiblePoints: 100, isLate: false },
    { score: 90, possiblePoints: 100, isLate: true },
    { score: 70, possiblePoints: 80, isLate: false },
  ];

  const weightedAverage = calculateWeightedAverage(assignments);
  console.log(`Weighted Average: ${weightedAverage}%`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}

  let totalWeightedScore= 0

  return score.id / points_possible;
}
console.log(weightedGrade)

  
  // function validateData(course, group) {
    
  

  // ============= Filter Assignments =====================//


  // function filterValidAssignments(assignments) {
  //   const now = new Date();
  //   return assignments.filter(assignment => new Date(assignment.due_at) < now);
  // }
  
  
  
  // Final Step // function getLearnerData(course, ag, submissions) {
  //   // here, we would process this data to achieve the desired result.
    
  // }
  
  // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // console.log(result);

  
  


  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
// //       1: 0.78, // 39 / 50
// //       2: 0.833 // late: (140 - 15) / 150
// //     }
// //   ];

// //   return result;