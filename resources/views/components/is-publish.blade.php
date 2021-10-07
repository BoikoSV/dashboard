@props(['publish'])

<div {{ $attributes->class([
    'info-btn',
    ($publish === '1' ? 'info-green' : 'info-yellow')
]) }}>
   {{ $publish === '1' ? 'Publish' : 'Pending' }}
</div>
