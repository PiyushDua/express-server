const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee2@suc.tech",
    reviewerEmail: "reviewer2@success.tech"
  },
  {
    traineeEmail: "trainee3@successive.tech",
    reviewerEmail: "reviewer3@successive.tech"
  }
];

function validateEmail(email) {
  let regex = /^\w+([\.-]?\w+)*@successive.tech/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}

function validateUsers(users) {
  const valid_users = [];
  const Invalid_users = [];
  users.forEach(function(user_email, index) {
    const { traineeEmail, reviewerEmail } = user_email;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      valid_users.push(`User-${index + 1}`);
    } else {
      Invalid_users.push(`User-${index + 1}`);
    }
  });

  console.log(`Valid users are - ${valid_users.length}`);
  console.log(valid_users);

  console.log(`\nInvalid users are - ${Invalid_users.length}`);
  console.log(Invalid_users);
}

validateUsers(users);
