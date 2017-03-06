
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {first_name: 'John', last_name: 'Smithe', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Such sickness', bed_id: 1, nurse_id: 1},
        {first_name:  'Phil', last_name: 'Doe', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Much sick', bed_id: 2, nurse_id: 3},
        {first_name: 'Beatrice', last_name: 'Ranger', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'So sick', bed_id: 6, nurse_id: 5},
        {first_name: 'Gertrude', last_name: 'Lim', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Sick', bed_id: 4, nurse_id: 6},
        {first_name: 'Lana', last_name: 'Lee', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Such sadness', bed_id: 5, nurse_id: 7},
        {first_name: 'Sterling', last_name: 'Chuck', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Much tired', bed_id: 21, nurse_id: 1},
        {first_name: 'Bob', last_name: 'Smith', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Many sick', bed_id: 8, nurse_id: 3},
        {first_name: 'Jon', last_name: 'Charlie', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'So sickness', bed_id: 14, nurse_id: 5},
        {first_name: 'Jacob', last_name: 'David', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Many sickness', bed_id: 23, nurse_id: 6},
        {first_name: 'Moe', last_name: 'Sinatra', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Cough cough', bed_id: 7, nurse_id: 7},
        {first_name: 'Frank', last_name: 'Pitt', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Achoo', bed_id: 20, nurse_id: 1},
        {first_name: 'Andrew', last_name: 'Franklin', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Running out of idea', bed_id: 13, nurse_id: 3},
        {first_name: 'Myles', last_name: 'Johnson', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Should have used a faker', bed_id: 9, nurse_id: 5},
        {first_name: 'Steven', last_name: 'Jimmy', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Where am I?', bed_id: 12, nurse_id: 6},
        {first_name: 'Wesley', last_name: 'Quebert', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'What year is it?', bed_id: 18, nurse_id: 7},
        {first_name: 'Henry', last_name: 'Ford', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Hey I just met you', bed_id: 17, nurse_id: 1},
        {first_name: 'George', last_name: 'Chan', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'This is crazy', bed_id: 15, nurse_id: 3},
        {first_name: 'Tom', last_name: 'Tracy', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Heres my number', bed_id: 16, nurse_id: 5},
        {first_name: 'Theodore', last_name: 'Killroy', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'So call me maybe', bed_id: 10, nurse_id: 6},
        {first_name: 'Amanda', last_name: 'Roy', doctor: 'none', emergency_contact_name: 'none', emergency_contact_number: 'none', allergies: 'none', previous_injuries: 'none', recent_illness: 'none', notes: 'Sneeze', bed_id: 11, nurse_id: 7}
      ]);
    });
};
