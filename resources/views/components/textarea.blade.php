@props(['name', 'label', 'forId' => Str::uuid(), 'content' => '' ])

<div class="textarea">
    <label class="textarea__label" for="{{ $forId }}">{{ $label }}</label>
    <textarea {{ $attributes->merge([
    'class' => 'textarea__field'
]) }} name="{{ $name }}" id="{{ $forId }}" cols="30" rows="10" placeholder="Enter {{ Str::lower($label) }}">{{ $content }}</textarea>
</div>

