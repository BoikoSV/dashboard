@props(['verify'])

<div {{ $attributes->class([
    'info-btn',
    ($verify === '1' ? 'info-blue' : 'info-yellow')
]) }}>
    {{ $verify === '1' ? 'Verify' : 'Pending' }}
</div>
