@extends('layouts.app')

@section('content')
    <form action="">
        <x-item-box>
            <x-page-header title="Add new post">
                <x-button-submit action="{{ route('posts.store') }}">Save</x-button-submit>
                <x-button href="{{ route('posts.index') }}">Cancel</x-button>
            </x-page-header>
            <x-grid-box>
                <x-main-info>

                    <x-title-input name="title" label="Title" />

                    <x-textarea name="description" label="Description" />

                    <x-textarea class="textarea--large" name="main_content" label="Content" />

                </x-main-info>

                <x-select-categories name="category_name" :categories="$categories" />
            </x-grid-box>
        </x-item-box>
    </form>



@endsection
