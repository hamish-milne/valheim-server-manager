<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center text-h6">
        Valheim Server Manager
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card class="mb-5">
              <v-card-title
                >World Name
                <v-spacer />
                <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn></v-card-title
              >
              <v-card-text>
                <v-text-field dense type="number" label="Port" />
                <v-text-field dense type="password" label="Password" />
                <v-combobox chips label="Users" multiple>
                  <template v-slot:selection="{ attrs, item, selected }">
                    <v-chip v-bind="attrs" :input-value="selected">
                      <v-icon left color="error">mdi-cancel</v-icon>
                      {{ item }}
                    </v-chip>
                  </template>
                </v-combobox>

                <v-list-item class="px-0">
                  <v-list-item-title>
                    1.2.3.4:5678
                  </v-list-item-title>
                  <v-list-item-action class="my-0">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on"
                          ><v-icon>mdi-content-copy</v-icon></v-btn
                        >
                      </template>
                      <span>Copy connection string</span>
                    </v-tooltip>
                  </v-list-item-action>
                </v-list-item>
                <v-list-item class="px-0">
                  <v-list-item-avatar class="my-0">
                    <v-icon color="error">mdi-alert</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-title>
                    Server is not responding
                  </v-list-item-title>
                </v-list-item>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="primary">View logs</v-btn>
                <v-spacer />
                <v-switch class="mt-0" />
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mb-5">
              <v-card-title>Resource monitor</v-card-title>
              <v-card-text>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-title>CPU</v-list-item-title>
                    <v-progress-linear height="25">
                      <template v-slot:default="{ value }">
                        <strong>{{ value }}%</strong>
                      </template>
                    </v-progress-linear>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item dense>
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
              <v-card-title>
                Installed software
              </v-card-title>
              <v-card-text>
                <v-list-item>
                  <v-list-item-icon
                    ><v-icon>mdi-check</v-icon></v-list-item-icon
                  >
                  <v-list-item-title
                    >Valheim Dedicated Server</v-list-item-title
                  >
                  <v-list-item-action
                    ><v-btn icon
                      ><v-icon>mdi-download</v-icon></v-btn
                    ></v-list-item-action
                  >
                </v-list-item>
              </v-card-text>
              <v-card-actions>
                <v-btn text>Update All</v-btn>
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
