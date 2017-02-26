
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {id: 1, first_name: 'John', last_name: 'Smithe', medical_history: 'Such sickness', bed_id: 1},
        {id: 2, first_name:  'Phil', last_name: 'Doe', medical_history: 'Much sick', bed_id: 2},
        {id: 3, first_name: 'Beatrice', last_name: 'Ranger', medical_history: 'So sick', bed_id: 6},
        {id: 4, first_name: 'Gertrude', last_name: 'Lim', medical_history: 'Sick', bed_id: 4},
        {id: 5, first_name: 'Lana', last_name: 'Lee', medical_history: 'Such sadness', bed_id: 5},
        {id: 6, first_name: 'Sterling', last_name: 'Chuck', medical_history: 'Much tired', bed_id: 21},
        {id: 7, first_name: 'Bob', last_name: 'Smith', medical_history: 'Many sick', bed_id: 8},
        {id: 8, first_name: 'Jon', last_name: 'Charlie', medical_history: 'So sickness', bed_id: 14},
        {id: 9, first_name: 'Jacob', last_name: 'David', medical_history: 'Many sickness', bed_id: 23},
        {id: 10, first_name: 'Moe', last_name: 'Sinatra', medical_history: 'Cough cough', bed_id: 7},
        {id: 11, first_name: 'Frank', last_name: 'Pitt', medical_history: 'Achoo', bed_id: 20},
        {id: 12, first_name: 'Andrew', last_name: 'Franklin', medical_history: 'Running out of idea', bed_id: 13},
        {id: 13, first_name: 'Myles', last_name: 'Johnson', medical_history: 'Should have used a faker', bed_id: 9},
        {id: 14, first_name: 'Steven', last_name: 'Jimmy', medical_history: 'Where am I?', bed_id: 12},
        {id: 15, first_name: 'Wesley', last_name: 'Quebert', medical_history: 'What year is it?', bed_id: 18},
        {id: 16, first_name: 'Henry', last_name: 'Ford', medical_history: 'Hey I just met you', bed_id: 17},
        {id: 17, first_name: 'George', last_name: 'Chan', medical_history: 'This is crazy', bed_id: 15},
        {id: 18, first_name: 'Tom', last_name: 'Tracy', medical_history: 'Heres my number', bed_id: 16},
        {id: 19, first_name: 'Theodore', last_name: 'Killroy', medical_history: 'So call me maybe', bed_id: 10},
        {id: 20, first_name: 'Amanda', last_name: 'Roy', medical_history: 'Sneeze', bed_id: 11}
      ]);
    });
};