@extends('layouts.app')

@section('content')

<x-page-header title="All users">
    <x-button class="btn-fill" href="{{ route('users.create') }}">Add new</x-button>
</x-page-header>


    <div class="table-wrapper">
        <table class="table">
            <thead>
                <tr class="table__tr">
                    <th class="table__th">Name</th>
                    <th class="table__th">Email</th>
                    <th class="table__th">Registered at</th>
                    <th class="table__th">Role</th>
                    <th class="table__th">Action</th>
                </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <tr class="table__tr">
                    <td class="table__td">
                        <x-user-name href="{{ route('users.show', ['user' => $user->id]) }}" img="{{ $user->user_avatar }}" username="{{ $user->name }}" />
                    </td>
                    <td class="table__td">{{ $user->email }}</td>
                    <td class="table__td">{{ $user->date_created }}</td>
                    <td class="table__td">
                        <x-user-role role="{{ $user->user_role }}" />
                    </td>
                    <td class="table__td">act</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>


@endsection
