@props(['name', 'categories'])

<div class="select-categories">
    <h4 class="select-categories__title">Categories</h4>
    <ul class="select-categories__list">
        @foreach($categories as $key => $category)
            @php
             $forId = Str::uuid();
            @endphp
        <li class="select-categories__item">
            <input class="select-categories__radio" {{ $key === 1 ? 'checked' : '' }} type="radio" name="{{ $name }}" id="{{ $forId }}">
            <label class="select-categories__label {{ $key === 1 ? 'select-categories__not-set' : '' }}" for="{{ $forId }}">{{ $category }}</label>
        </li>
        @endforeach
    </ul>
</div>
