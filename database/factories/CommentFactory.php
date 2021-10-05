<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $usersId = User::pluck('id')->toArray();
        $postsId = Post::pluck('id')->toArray();
        return [
            'main_text' => $this->faker->text(Arr::random([10, 50, 100, 200, 500])),
            'user_id' => Arr::random($usersId),
            'post_id' => Arr::random($postsId),
            'is_publish' => Arr::random([0, 1]),
            'created_at' => $this->faker->dateTime,
            'updated_at' => $this->faker->dateTime,
        ];
    }
}
