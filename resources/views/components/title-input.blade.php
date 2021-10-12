@props(['name', 'label', 'forId' => Str::uuid(), 'content' => '' ])

<div class="title-input">
    <label class="title-input__label" for="{{ $forId }}">{{ $label }}</label>
    <input class="title-input__field" type="text" name="{{ $name }}" id="{{ $forId }}" value="{{ $content }}" placeholder="Enter {{ Str::lower($label) }}" />
</div>

