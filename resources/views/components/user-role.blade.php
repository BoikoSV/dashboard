@props(['role' => false])

{{ $role }}
<span class="{{ $role ? '' : 'not-role' }}">{{ $role ? $role : 'Not set' }}</span>
