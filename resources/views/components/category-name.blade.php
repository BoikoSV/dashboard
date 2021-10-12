@props(['categoryName'])

<div class="{{ $categoryName !== 'Not set' ? '' : 'info-btn info-yellow' }}">
    {{ $categoryName }}
</div>
