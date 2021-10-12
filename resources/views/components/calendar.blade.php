@props(['name', 'value' => false])

<div class="calendar">
    <div class="calendar__input-wrapper">
        <input class="calendar__input" type="text" value="{{ $value ? $value : '' }}" name="{{ $name }}">
        <button class="calendar__input-btn" type="button"></button>
    </div>
</div>














