@props(['role' => false])

<span class="{{ $role === 'Not set' ? 'info-btn info-yellow' : 'info-btn info-blue' }}">{{ $role }}</span>
