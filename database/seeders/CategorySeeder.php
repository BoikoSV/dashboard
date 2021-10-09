<?php

namespace Database\Seeders;

use App\Models\Category;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        DB::table('categories')->insert([
            'id' => 1,
            'category_name' => 'Not set',
            'is_publish' => Arr::random([0, 1]),
            'description' => $faker->text(200),
//            'category_img' => Arr::random([$this->faker->imageUrl, null]),
            'category_img' => Arr::random(["http://lorempixel.com/" . Arr::random([50, 60, 70, 80, 90, 100, 110]) . "/" . Arr::random([50, 60, 70, 80, 90, 100, 110]), null]),
            'created_at' => $faker->dateTime,
            'updated_at' => $faker->dateTime
        ]);

        Category::factory(7)->create();
    }
}
