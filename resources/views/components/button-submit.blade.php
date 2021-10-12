@props(['action'])

<button class="button-submit" type="submit" action="{{ $action }}">
    {{ $slot }}
</button>
