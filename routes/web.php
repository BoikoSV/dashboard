<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TagController;



Route::resource('users', UserController::class);
Route::resource('posts', PostController::class);
Route::resource('categories', CategoryController::class);
Route::resource('comments', CommentController::class);
Route::resource('roles', RoleController::class);
Route::resource('tags', TagController::class);

