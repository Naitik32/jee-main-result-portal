document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate fetching result data (replace with actual API call)
  const rollNumber = document.getElementById('rollNumber').value;
  const dob = document.getElementById('dob').value;

  // Example result data
  const resultData = {
    rollNumber: rollNumber,
    name: 'John Doe',
    dob: dob,
    score: '95/100',
    rank: '1500',
    status: 'Qualified',
    subjects: [
      { name: 'Mathematics', marks: '25/25', percentile: '99.5' },
      { name: 'Physics', marks: '23/25', percentile: '98.7' },
      { name: 'Chemistry', marks: '22/25', percentile: '97.8' }
    ]
  };

  // Display basic result details
  document.getElementById('resultName').textContent = resultData.name;
  document.getElementById('resultRollNumber').textContent = resultData.rollNumber;
  document.getElementById('resultDOB').textContent = resultData.dob;
  document.getElementById('resultScore').textContent = resultData.score;
  document.getElementById('resultRank').textContent = resultData.rank;
  document.getElementById('resultStatus').textContent = resultData.status;

  // Populate subject-wise marks and percentile table
  const subjectMarksTable = document.getElementById('subjectMarksTable');
  subjectMarksTable.innerHTML = ''; // Clear previous data

  resultData.subjects.forEach(subject => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${subject.name}</td>
      <td>${subject.marks}</td>
      <td>${subject.percentile}</td>
    `;
    subjectMarksTable.appendChild(row);
  });

  // Show the result container
  document.getElementById('result').style.display = 'block';
});
