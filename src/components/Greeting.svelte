<script lang="ts">
  const currentDate = new Date();
  const greeting =
    currentDate.getHours() < 12
      ? "Good morning"
      : currentDate.getHours() < 18
        ? "Good afternoon"
        : "Good evening";
</script>

<h1 class="text-4xl font-bold">{greeting}</h1>
