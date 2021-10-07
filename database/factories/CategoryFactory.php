<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_name' => Str::ucfirst($this->faker->words(Arr::random([1, 2, 3]), true)),
            'is_publish' => Arr::random([0, 1]),
            'description' => $this->faker->text(200),
//            'category_img' => Arr::random([$this->faker->imageUrl, null]),
            'category_img' => Arr::random(["http://lorempixel.com/" . Arr::random([50, 60, 70, 80, 90, 100, 110]) . "/" . Arr::random([50, 60, 70, 80, 90, 100, 110]), null]),
            'created_at' => $this->faker->dateTime,
            'updated_at' => $this->faker->dateTime
        ];
    }
}
