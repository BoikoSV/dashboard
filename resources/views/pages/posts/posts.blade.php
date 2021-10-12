@extends('layouts.app')

@section('content')
    <x-page-header title="All posts">
        <x-button class="btn-fill" href="{{ route('posts.create') }}">Add new</x-button>
    </x-page-header>


    <x-filter-box>
        <x-calendar name="more" :value="$more" />
        to
        <x-calendar name="less" :value="$less" />

        <x-drop-down field-name="category_id" query="{{ request()->query('category_id') }}" :data-array="$categories">Category</x-drop-down>

        <x-drop-down field-name="is_publish" query="{{ request()->query('is_publish') }}" :data-array="['0' => 'Not publish', '1' =>'Publish']">Is publish</x-drop-down>

        <x-drop-down field-name="is_verify" query="{{ request()->query('is_verify') }}" :data-array="['0' => 'Not verify', '1' =>'Verify']">Is verify</x-drop-down>


    </x-filter-box>


    <div class="table-wrapper">
        <table class="table">
            <thead>
            <tr class="table__tr">
                <th class="table__th">Thumbnail</th>
                <th class="table__th">Title</th>
                <th class="table__th">Author</th>
                <th class="table__th">Category</th>
                <th class="table__th">Comments</th>
                <th class="table__th">Is publish</th>
                <th class="table__th">Is verify</th>
                <th class="table__th">Date</th>
                <th class="table__th">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($posts as $post)
                <tr class="table__tr">
                    <td class="table__td">
                        <x-thumbnail img="{{ $post->post_img }}" />
                    </td>
                    <td class="table__td">{{ $post->title }}</td>
                    <td class="table__td">
                        <x-user-name href="{{ route('users.show', ['user' => $post->user->id]) }}" img="{{ $post->user->user_avatar }}" username="{{ $post->user->name }}" />
                    </td>
                    <td class="table__td">
                        <x-category-name category-name="{{ $post->category_name }}"/>
                    </td>
                    <td class="table__td">{{ $post->comments->count() }}</td>
                    <td class="table__td">
                        <x-is-publish publish="{{ $post->is_publish }}"/>
                    </td>
                    <td class="table__td">
                        <x-is-verify verify="{{ $post->is_verify }}"/>
                    </td>
                    <td class="table__td">{{ $post->date_created }}</td>

                    <td class="table__td">act</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

    {{ $posts->withQueryString()->onEachSide(1)->links() }}

@endsection
