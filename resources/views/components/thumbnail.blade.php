@props(['img'])

<div class="thumbnail {{ $img ? '' : 'thumbnail__custom' }}">
    @if($img)
    <img class="thumbnail__img" src="{{ $img }}" alt="">
    @else
    {{ 'No image' }}
    @endif
</div>
