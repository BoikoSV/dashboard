@extends('layouts.app')
{{--{{ dump($comments) }}--}}
@section('content')

        <x-page-header title="All comments" />


        <div class="table-wrapper">
            <table class="table">
                <thead>
                <tr class="table__tr">
                    <th class="table__th">Author</th>
                    <th class="table__th">Comment</th>
                    <th class="table__th">Go to post</th>
                    <th class="table__th">Date</th>
                    <th class="table__th">Is publish</th>
                    <th class="table__th">Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($comments as $comment)
                    <tr class="table__tr">
                        <td class="table__td comments__author">
                            <x-user-name href="{{ route('users.show', ['user' => $comment->user->id]) }}" img="{{ $comment->user->user_avatar }}" username="{{ $comment->user->name }}" />
                        </td>
                        <td class="table__td comments__text">{{ $comment->main_text }}</td>
                        <td class="table__td comment__external">
                            <x-external href="{{ route('posts.show', ['post' => $comment->post->id]) }}"/>
{{--                            {{ 'link to post' . $comment->post->id }}--}}
                        </td>
                        <td class="table__td">{{ $comment->date_created }}</td>
                        <td class="table__td">
                            <x-is-publish publish="{{ $comment->is_publish }}" />
                        </td>
{{--                        <td class="table__td">--}}
{{--                            <x-user-role role="{{ $user->user_role }}" />--}}
{{--                        </td>--}}
                        <td class="table__td">act</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>


@endsection