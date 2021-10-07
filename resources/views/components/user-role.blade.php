@props(['role' => false])

{{ $role }}
<span class="{{ $role ? '' : 'info-btn info-blue' }}">{{ $role ? $role : 'Not set' }}</span>
