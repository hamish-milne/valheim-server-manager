<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center text-h4">
        Valheim Server Manager
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title
                >World Name
                <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn></v-card-title
              >
              <v-card-text>
                <v-form>
                  <v-text-field type="number" label="Port" />
                  <v-text-field type="password" label="Password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">View logs</v-btn>
                <v-btn color="primary">Start</v-btn>
                <v-btn color="error">Stop</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Resource monitor</v-card-title>
              <v-card-text>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>CPU</v-list-item-title>
                    <v-progress-linear height="25">
                      <template v-slot:default="{ value }">
                        <strong>{{ value }}%</strong>
                      </template>
                    </v-progress-linear>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Memory</v-list-item-title>
                    <v-progress-linear height="25">
                      <template v-slot:default="{ value }">
                        <strong>{{ value }}%</strong>
                      </template>
                    </v-progress-linear>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-title class="text-h4">
                <v-icon>mdi-check</v-icon>
                Valheim Dedicated Server is installed
              </v-card-title>
              <v-card-actions>
                <v-btn>Update</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>
