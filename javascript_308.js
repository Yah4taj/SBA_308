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

// =========================================================================      
let LearnerData = {
  CourseInfo: learner_id,
  AssignmentGroup: LearnerSubmissions.assignment_id,
  LearnerSubmissions:score

}

//Validate Course data

function validateCourseID(CourseInfo, AssignmentGroup) {

  try { 
    if(AssignmentGroup.id !==course.id) throw "Invalid input"     //Assignment group does not belong to course group
  } catch (err) {
    console.log(err); {
  }
// Validate submission data

  if (typeof points_possible !== 'number' || points_possible <= 0) {    //Points possible must be a number and greater than 0
      throw new Error(`Invalid points_possible for assignment ${assignment_id}. Must be a positive number.`);
  }
  if (new Date(due_at) <= new Date() && course_id !== assignment_group_course_id) {  //Assignment due date and course id are not 
    throw new Error(`Mismatching course_id for assignment ${assignment_id}.`);    //equal to Assignment group course id (mismatch)
  }
  if (typeof score !== 'number') {
    throw new Error(`Invalid score for assignment ${assignment_id}. Score must be a number.`); //score must be a number not string
}
if (new Date(due_at) <= new Date()) {    //Assignment past due
  let adjustedScore = score;
}
  }
  }; 
  
  console.log(error); 


let submissions =[
  {learner_id, assignment_id, score, points_possible},

]

  let totalScore = 0;
  let totalPointsPossible = 0;

  


  const percentage = (adjustedScore / AssignmentGroup.points_possible) * 100;
  assignmentScores[assignment_id] = percentage;

  totalScore += adjustedScore;
  totalPointsPossible += points_possible;

  if (submitted_at && new Date(submitted_at) > new Date(due_at)) {  //10% deduction from points possible for late submissions
    adjustedScore -= 0.1 * points_possible;
    adjustedScore = Math.max(0, adjustedScore); //  Score does no





  /

         

          submissions.forEach(submission => {
              const { assignment_id, points_possible, score, due_at, submitted_at, course_id, assignment_group_course_id } = submission;

              /

                    const percentage = (adjustedScore / points_possible) * 100;
                    assignmentScores[assignment_id] = percentage;

                    totalScore += adjustedScore;
                    totalPointsPossible += points_possible;
                }
            });

            const avg = totalPointsPossible > 0 ? (totalScore / totalPointsPossible) * 100 : 0;

            return {
                id,
                avg,
                ...assignmentScores
              };
            });
        } catch (error) {
            console.error("Error processing data:", error.message);
            throw error; // Re-throw the error after logging it
        }
    }
   
    // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // console.log(result);

   
  
  

//    




// function get getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions); {
//   validateData(course,ag)
// }
  
  
  // Final Step // function getLearnerData(course, ag, submissions) {
  //   // here, we would process this data to achieve the desired result.
    
  // }
  
  

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