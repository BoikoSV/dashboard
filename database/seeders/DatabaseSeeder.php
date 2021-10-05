<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Role;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Category::factory(7)->create();
        Role::factory(4)->create();
        User::factory(10)->create();
        Post::factory(200)->create();
        Comment::factory(500)->create();
        Tag::factory(50)->create();
        $this->call(PostTagSeeder::class);
    }
}
