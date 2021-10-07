@props(['categoryName'])
<div class="{{ $categoryName ? '' : 'info-btn info-yellow' }}">
    {{ $categoryName ? $categoryName : 'Not set'}}
</div>
