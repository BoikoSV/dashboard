@props(['field-name', 'data-array', 'query' => false])
<div class="drop-down">
    <div class="drop-down__select">
        <button type="button" class="drop-down__button">{{ $query ? $dataArray[$query] : $slot }}</button>
        <ul class="drop-down__list">
            <li class="drop-down__list-item" data-value="">
                - {{ $slot }} -
            </li>
            @foreach($dataArray as $key => $value)
                <li class="drop-down__list-item" data-value="{{ $key }}">{{ $value }}</li>
            @endforeach
        </ul>
    </div>
    <input class="drop-down__input" type="hidden" name="{{ $fieldName }}" value="{{ request()->query($fieldName) }}">
</div>

