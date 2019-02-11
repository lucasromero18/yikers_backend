
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_id: 15, situation_id: 1, comment: 'No way!!!! I would not have put the cat up for adoption. Maybe you just need to learn how to teach your cat better!'},
        {user_id: 14, situation_id: 2, comment: 'Study a bit harder? You will gete the answers correct then!'},
        {user_id: 13, situation_id: 3, comment: 'Give him a good prank back! I think you should re-apply for the position just for that reason.'},
        {user_id: 12, situation_id: 4, comment: 'Im glad that you dumped her man, seemed like a wise decision.'},
        {user_id: 11, situation_id: 5, comment: 'Tell him to quiet down!! I dont think pouring popcorn on his head was necessary.'},
        {user_id: 10, situation_id: 6, comment: 'I recommend you gather your favorite artists together and put them together based off of that!'},
        {user_id: 9, situation_id: 7, comment: 'I might have done the same.. but i am a petty person.'},
        {user_id: 3, situation_id: 8, comment: 'He is just a dog..'},
        {user_id: 7, situation_id: 9, comment: 'I agree that she should have told you before.. but you just left her up there like that?'},
        {user_id: 6, situation_id: 10, comment: 'He probably didnt even lift bro.. you made the right choice.'},
        {user_id: 5, situation_id: 11, comment: '30??? Thats it? Weak.'},
        {user_id: 4, situation_id: 12, comment: 'Should have been able to run faster! You would have been $100 richer.'},
        {user_id: 3, situation_id: 13, comment: 'Talk to them about it! Dont hide from it!'},
        {user_id: 2, situation_id: 14, comment: 'Y i k e r s.'},
        {user_id: 1, situation_id: 15, comment: 'Can i come on the vacation with ya?'},
      ]);
    });
};
