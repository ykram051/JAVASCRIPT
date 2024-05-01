<template>
  <div class="confirm-dialog">
    <p>Are you sure you want to delete <br><strong>{{ job.title }}</strong>?</p>
    <div class="button-container">
      <button @click="confirmDelete" class="confirm-button">Yes</button>
      <button @click="cancelDelete" class="cancel-button">No</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ConfirmDeleteDialog',
  props: {
    job: Object
  },
  methods: {
    confirmDeleteJob(job) {
      this.selectedJob = job; // Set the selected job for deletion
      this.showConfirmDelete = true; // Show the confirmation dialog
    },
    confirmDelete() {
      this.$emit('confirm');
    },
    cancelDelete() {
      this.$emit('cancel');
    }
  }
}
</script>
<style>
.confirm-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  padding: 25px;

  z-index: 100;
}

.confirm-dialog p {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;

}

.confirm-dialog p strong {
  font-weight: bold;
  color: #222;

}

.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 15px;

}

.confirm-button,
.cancel-button {
  padding: 10px 20px;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

}

.confirm-button {
  background-color: #4CAF50;

  color: #fff;
  transition: background-color 0.2s ease-in-out;

}

.confirm-button:hover {
  background-color: #388e3c;

}

.cancel-button {
  background-color: #dc3545;

  color: #fff;
  transition: background-color 0.2s ease-in-out;
}

.cancel-button:hover {
  background-color: #e5392f;

}
</style>