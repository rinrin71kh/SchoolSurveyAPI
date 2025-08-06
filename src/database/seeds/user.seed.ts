import { User } from '../../app/models/User';

export async function seedUsers() {
  await User.bulkCreate([
    {
      username: 'admin1',
      role: 'admin',
      password: 'adminpass1',
      email: 'admin1@example.com',
      is_student: false,
      approval_status: 'approved',
    },
    {
      username: 'admin2',
      role: 'admin',
      password: 'adminpass2',
      email: 'admin2@example.com',
      is_student: false,
      approval_status: 'approved',
    },
    {
      username: 'student1',
      role: 'student',
      password: 'studentpass1',
      email: 'student1@example.com',
      is_student: true,
      approval_status: 'approved',
    },
    {
      username: 'student2',
      role: 'student',
      password: 'studentpass2',
      email: 'student2@example.com',
      is_student: true,
      approval_status: 'pending',
    },
    {
      username: 'anon1',
      role: 'anonymous',
      password: 'anonpass1',
      email: 'anon1@example.com',
      is_student: false,
      approval_status: 'pending',
    },
    {
      username: 'anon2',
      role: 'anonymous',
      password: 'anonpass2',
      email: 'anon2@example.com',
      is_student: false,
      approval_status: 'pending',
    },
  ]);
  console.log('✅ Users seeded');
}
