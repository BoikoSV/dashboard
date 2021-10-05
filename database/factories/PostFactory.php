<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userIds = User::pluck('id')->toArray();
        $categoryIds = array_merge(Category::pluck('id')->toArray(), [null, null, null, null, null]);
        return [
            'title' => $this->faker->text(100),
            'description' => $this->faker->text(250),
            'main_content' => $this->faker->text(3000),
            'post_img' => Arr::random([$this->faker->imageUrl, null]),
            'user_id' => Arr::random($userIds),
            'is_publish' => Arr::random([0, 1]),
            'is_verify' => Arr::random([0, 1]),
            'category_id' => Arr::random($categoryIds),
            'created_at' => $this->faker->dateTime,
            'updated_at' => $this->faker->dateTime,
        ];
    }
}
