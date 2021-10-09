<?php

namespace Database\Seeders;

use App\Models\Role;
use Faker\Generator;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        Role::create([
            'id' => 0,
            'role_name' => 'Not set',
            'created_at' => $faker->dateTime,
            'updated_at' => $faker->dateTime,
        ]);

        Role::factory(4)->create();
    }
}
