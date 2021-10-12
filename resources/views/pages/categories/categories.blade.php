@extends('layouts.app')

@section('content')

        <x-page-header title="All categories">
            <x-button class="btn-fill" href="{{ route('categories.create') }}">Add new</x-button>
        </x-page-header>

        <x-filter-box>

            from
            <x-calendar name="more" :value="$more" />
            to
            <x-calendar name="less" :value="$less" />

        </x-filter-box>


        <div class="table-wrapper">
            <table class="table">
                <thead>
                <tr class="table__tr">
                    <th class="table__th">Thumbnail</th>
                    <th class="table__th">Name</th>
                    <th class="table__th">Description</th>
                    <th class="table__th">Slug</th>
                    <th class="table__th">Date</th>
                    <th class="table__th">Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($categories as $category)
                    <tr class="table__tr">
                        <td class="table__td">
                            <x-thumbnail img="{{ $category->category_img }}" />
                        </td>
                        <td class="table__td">{{ $category->category_name }}</td>
                        <td class="table__td table__categories">{{ $category->description }}</td>
                        <td class="table__td">{{ '/' . $category->slug }}</td>
                        <td class="table__td">{{ $category->date_created }}</td>
                        <td class="table__td">act</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>

        {{ $categories->withQueryString()->onEachSide(1)->links() }}

@endsection
