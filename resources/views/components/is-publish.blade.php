@props(['publish'])

<div {{ $attributes->class([
    'info-btn',
    ($publish === '1' ? 'info-blue' : 'info-yellow')
]) }}>
   {{ $publish === '1' ? 'Publish' : 'Pending' }}
</div>
