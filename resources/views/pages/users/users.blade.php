@extends('layouts.app')

@section('content')

<x-page-header title="All users">

</x-page-header>


    <x-filter-box>

        from
        <x-calendar name="more" :value="$more" />
        to
        <x-calendar name="less" :value="$less" />

        <x-drop-down field-name="role_name" query="{{ request()->query('role_name') }}" :data-array="$roles->pluck('role_name', 'id')">Role</x-drop-down>
    </x-filter-box>



    <div class="table-wrapper">

        @if(count($users) > 0)
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
                        <x-user-role role="{{ $user->role->role_name }}" />
                    </td>
                    <td class="table__td">act</td>
                </tr>
            @endforeach
            </tbody>
        </table>
        @else
            <div class="table__no-data">Нет записей</div>
        @endif
    </div>
@if($users)
{{ $users->withQueryString()->onEachSide(1)->links() }}
@endif

@endsection
