<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Tag;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        $postsId = Post::pluck('id')->toArray();
        $tagId = Tag::pluck('id')->toArray();
        $data = [];
        for($i = 0; $i < count($postsId) * 4; $i++){
            $data[] = [
                'post_id' => Arr::random($postsId),
                'tag_id' => Arr::random($tagId),
                'created_at' => $faker->dateTime,
                'updated_at' => $faker->dateTime,
            ];
        }
        DB::table('post_tag')->insert($data);
    }
}
